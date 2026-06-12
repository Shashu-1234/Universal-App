import { DiscoveredDevice } from '../types/index.js';

export interface DiscoveryAdapter {
  protocolName: string;
  discover(): Promise<DiscoveredDevice[]>;
}
