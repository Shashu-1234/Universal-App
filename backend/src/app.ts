import express, { type Express } from 'express';
import { createDeviceRoutes } from './routes/devices.js';
import { createDiscoveryRoutes } from './routes/discovery.js';
import { DiscoveryEngine } from './services/discovery_engine.js';
import { DeviceRegistry } from './services/device_registry.js';

export interface AppServices {
  discoveryEngine: DiscoveryEngine;
  deviceRegistry: DeviceRegistry;
}

export const createApp = (
  services: AppServices = {
    discoveryEngine: new DiscoveryEngine(),
    deviceRegistry: new DeviceRegistry(),
  },
): Express => {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/discovery', createDiscoveryRoutes(services.discoveryEngine, services.deviceRegistry));
  app.use('/devices', createDeviceRoutes(services.deviceRegistry));

  return app;
};
