import type { Device } from '../models/device.js';

export class DeviceRegistry {
  private readonly devices = new Map<string, Device>();

  upsertMany(devices: Device[]): void {
    for (const device of devices) {
      this.devices.set(device.id, device);
    }
  }

  list(): Device[] {
    return Array.from(this.devices.values());
  }

  getById(id: string): Device | undefined {
    return this.devices.get(id);
  }
}
