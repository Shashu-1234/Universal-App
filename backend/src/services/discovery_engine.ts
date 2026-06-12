import type { Device } from '../models/device.js';

interface DiscoveryStatus {
  scanning: boolean;
  progress: number;
  lastScanAt?: string;
}

const NON_TARGET_DEVICE_TYPES = new Set([
  'smartphone',
  'tablet',
  'laptop',
  'desktop',
  'smartwatch',
  'fitness_band',
  'headphones',
  'earbuds',
  'gaming_controller',
  'keyboard',
  'mouse',
]);

const SAMPLE_DISCOVERY_RESULTS: Device[] = [
  {
    id: 'dev_tv_001',
    name: 'Living Room TV',
    type: 'smart_tv',
    category: 'entertainment',
    manufacturer: 'Samsung',
    model: 'QN90C',
    firmware: '1.2.0',
    status: 'online',
    protocols: ['mdns', 'ssdp'],
    controllabilityScore: 0.95,
    controllable: true,
  },
  {
    id: 'dev_light_001',
    name: 'Hall Light',
    type: 'smart_light',
    category: 'smart_home',
    manufacturer: 'Philips',
    model: 'Hue A19',
    firmware: '3.4.2',
    status: 'online',
    protocols: ['matter', 'mdns'],
    controllabilityScore: 0.89,
    controllable: true,
  },
  {
    id: 'dev_phone_001',
    name: 'Personal Phone',
    type: 'smartphone',
    category: 'other',
    manufacturer: 'Generic',
    model: 'Model X',
    firmware: '0.0.1',
    status: 'online',
    protocols: ['ble'],
    controllabilityScore: 0.0,
    controllable: false,
  },
];

export class DiscoveryEngine {
  private status: DiscoveryStatus = {
    scanning: false,
    progress: 0,
  };

  private discoveredDevices: Device[] = [];

  startScan(): Device[] {
    this.status = {
      scanning: true,
      progress: 10,
    };

    const filtered = SAMPLE_DISCOVERY_RESULTS.filter(
      (device) => !NON_TARGET_DEVICE_TYPES.has(device.type),
    );

    this.discoveredDevices = filtered;

    this.status = {
      scanning: false,
      progress: 100,
      lastScanAt: new Date().toISOString(),
    };

    return this.discoveredDevices;
  }

  getStatus(): DiscoveryStatus {
    return this.status;
  }

  getResults(): Device[] {
    return this.discoveredDevices;
  }

  cancelScan(): DiscoveryStatus {
    this.status = {
      ...this.status,
      scanning: false,
    };

    return this.status;
  }
}
