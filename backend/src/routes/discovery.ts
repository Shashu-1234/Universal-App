import { Router } from 'express';
import type { DiscoveryEngine } from '../services/discovery_engine.js';
import type { DeviceRegistry } from '../services/device_registry.js';

export const createDiscoveryRoutes = (
  discoveryEngine: DiscoveryEngine,
  deviceRegistry: DeviceRegistry,
): Router => {
  const router = Router();

  router.post('/scan', (_req, res) => {
    const devices = discoveryEngine.startScan();
    deviceRegistry.upsertMany(devices);

    res.status(202).json({
      status: 'completed',
      discovered: devices.length,
    });
  });

  router.get('/results', (_req, res) => {
    res.json({
      devices: discoveryEngine.getResults(),
    });
  });

  router.get('/status', (_req, res) => {
    res.json(discoveryEngine.getStatus());
  });

  router.post('/cancel', (_req, res) => {
    const status = discoveryEngine.cancelScan();
    res.json({
      status: 'cancelled',
      scanning: status.scanning,
    });
  });

  return router;
};
