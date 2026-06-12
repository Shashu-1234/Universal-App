import { DiscoveryAdapter } from '../protocols/adapter.js';
import { adapters as defaultAdapters } from '../protocols/mock_adapters.js';
import { DeviceAnalysis, DiscoveredDevice } from '../types/index.js';

const excludedKeywords = [
  'phone', 'tablet', 'laptop', 'desktop', 'watch', 'headphone', 'keyboard', 'mouse', 'controller', 'macbook', 'iphone', 'ipad'
];

export class DiscoveryEngine {
  constructor(private readonly protocolAdapters: DiscoveryAdapter[] = defaultAdapters) {}

  async discoverNearbyDevices(): Promise<DiscoveredDevice[]> {
    const batches = await Promise.all(this.protocolAdapters.map((adapter) => adapter.discover()));
    return batches.flat();
  }

  normalizeAndAnalyze(discovered: DiscoveredDevice[]): DeviceAnalysis[] {
    return discovered.map((device) => {
      const descriptor = `${device.manufacturer} ${device.model}`.toLowerCase();
      const excluded = excludedKeywords.some((keyword) => descriptor.includes(keyword));
      const score = this.calculateControllability(device);

      return {
        ...device,
        category: excluded ? 'excluded' : device.category,
        controllabilityScore: excluded ? 0 : score,
        excludedReason: excluded ? 'Personal computing device excluded by policy' : undefined
      };
    });
  }

  private calculateControllability(device: DiscoveredDevice): number {
    const apiWeight = device.apiAvailable ? 40 : 0;
    const capabilityWeight = Math.min(device.capabilities.length * 15, 45);
    const pairingPenalty = device.pairingRequired ? -5 : 0;
    return Math.max(0, Math.min(100, apiWeight + capabilityWeight + 20 + pairingPenalty));
  }
}
