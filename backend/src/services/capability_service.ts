import { DeviceAnalysis } from '../types/index.js';

export class CapabilityService {
  getSupportedProtocols(device: DeviceAnalysis): string[] {
    return [device.protocol, ...(device.protocol === 'ssdp' ? ['upnp'] : [])];
  }

  requiresSecurePairing(device: DeviceAnalysis): boolean {
    return device.pairingRequired || device.securityRequirements.some((s) => s.includes('oauth') || s.includes('matter'));
  }
}
