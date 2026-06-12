export type DeviceCategory =
  | 'entertainment'
  | 'smart_home'
  | 'climate_control'
  | 'appliance'
  | 'networking'
  | 'other';

export interface Device {
  id: string;
  name: string;
  type: string;
  category: DeviceCategory;
  manufacturer: string;
  model: string;
  firmware: string;
  status: 'online' | 'offline' | 'unknown';
  protocols: string[];
  controllabilityScore: number;
  controllable: boolean;
}
