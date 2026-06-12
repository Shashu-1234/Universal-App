import { Router } from 'express';
import type { DeviceRegistry } from '../services/device_registry.js';

export const createDeviceRoutes = (deviceRegistry: DeviceRegistry): Router => {
  const router = Router();

  router.get('/', (_req, res) => {
    res.json({
      devices: deviceRegistry.list(),
    });
  });

  router.get('/:id', (req, res) => {
    const device = deviceRegistry.getById(req.params.id);

    if (!device) {
      return res.status(404).json({
        error: 'Device not found',
      });
    }

    return res.json(device);
  });

  return router;
};
