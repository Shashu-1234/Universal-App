import { createServer } from 'node:http';
import { env } from './config/env.js';
import { DiscoveryEngine } from './services/discovery_engine.js';
import { CapabilityService } from './services/capability_service.js';
import { RemoteGenerator } from './services/remote_generator.js';
import { ActionExecutor } from './services/action_executor.js';
import { AuthService } from './services/auth_service.js';
import { defaultRoutines } from './services/routine_service.js';

const discovery = new DiscoveryEngine();
const capabilityService = new CapabilityService();
const remoteGenerator = new RemoteGenerator();
const actionExecutor = new ActionExecutor();
const authService = new AuthService();

const sendJson = (res: import('node:http').ServerResponse, code: number, body: unknown) => {
  res.writeHead(code, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
};

const parseBody = async (req: import('node:http').IncomingMessage): Promise<Record<string, unknown>> => {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8')) as Record<string, unknown>;
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/health') return sendJson(res, 200, { status: 'ok' });

  if (req.method === 'POST' && url.pathname === '/auth/login') {
    const body = await parseBody(req);
    const userId = String(body.userId ?? 'demo-user');
    return sendJson(res, 200, authService.issueTokens(userId));
  }

  if (req.method === 'POST' && url.pathname === '/auth/refresh') {
    const body = await parseBody(req);
    const refreshed = authService.refresh(String(body.refreshToken ?? ''));
    return sendJson(res, refreshed ? 200 : 401, refreshed ?? { error: 'invalid_refresh_token' });
  }

  if (req.method === 'GET' && url.pathname === '/discovery/scan') {
    const discovered = await discovery.discoverNearbyDevices();
    return sendJson(res, 200, discovery.normalizeAndAnalyze(discovered));
  }

  if (req.method === 'GET' && url.pathname === '/devices') {
    const discovered = discovery.normalizeAndAnalyze(await discovery.discoverNearbyDevices());
    return sendJson(res, 200, discovered.filter((d) => d.category !== 'excluded'));
  }

  if (req.method === 'GET' && url.pathname.startsWith('/capabilities/')) {
    const id = url.pathname.split('/')[2];
    const devices = discovery.normalizeAndAnalyze(await discovery.discoverNearbyDevices());
    const device = devices.find((d) => d.id === id);
    if (!device) return sendJson(res, 404, { error: 'device_not_found' });
    return sendJson(res, 200, { capabilities: device.capabilities, protocols: capabilityService.getSupportedProtocols(device) });
  }

  if (req.method === 'GET' && url.pathname.startsWith('/remotes/')) {
    const id = url.pathname.split('/')[2];
    const devices = discovery.normalizeAndAnalyze(await discovery.discoverNearbyDevices());
    const device = devices.find((d) => d.id === id);
    if (!device) return sendJson(res, 404, { error: 'device_not_found' });
    return sendJson(res, 200, remoteGenerator.generate(device));
  }

  if (req.method === 'POST' && url.pathname === '/actions/execute') {
    const body = await parseBody(req);
    const deviceId = String(body.deviceId ?? '');
    const command = String(body.command ?? '');
    const devices = discovery.normalizeAndAnalyze(await discovery.discoverNearbyDevices());
    const device = devices.find((d) => d.id === deviceId);
    if (!device) return sendJson(res, 404, { error: 'device_not_found' });
    return sendJson(res, 200, await actionExecutor.execute(device, command, body.payload));
  }

  if (req.method === 'GET' && url.pathname === '/routines') {
    return sendJson(res, 200, defaultRoutines);
  }

  sendJson(res, 404, { error: 'not_found' });
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(env.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Universal Smart Remote backend running on ${env.port}`);
  });
}

export { server };
