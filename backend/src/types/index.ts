export type Protocol =
  | 'mdns'
  | 'ssdp'
  | 'upnp'
  | 'ble'
  | 'matter'
  | 'homekit'
  | 'smartthings'
  | 'alexa'
  | 'google_home';

export type DeviceCategory =
  | 'tv'
  | 'light'
  | 'speaker'
  | 'thermostat'
  | 'plug'
  | 'hub'
  | 'appliance'
  | 'sensor'
  | 'other'
  | 'excluded';

export interface DeviceCapability {
  id: string;
  type: 'power' | 'volume' | 'channel' | 'brightness' | 'temperature' | 'color' | 'media' | 'navigation' | 'status';
  commands: string[];
  range?: { min: number; max: number; step?: number };
}

export interface DiscoveredDevice {
  id: string;
  manufacturer: string;
  model: string;
  firmware: string;
  protocol: Protocol;
  category: DeviceCategory;
  ip?: string;
  bleId?: string;
  securityRequirements: string[];
  pairingRequired: boolean;
  apiAvailable: boolean;
  capabilities: DeviceCapability[];
}

export interface DeviceAnalysis extends DiscoveredDevice {
  controllabilityScore: number;
  excludedReason?: string;
}

export interface RemoteControlSchema {
  deviceId: string;
  layout: 'compact' | 'standard' | 'advanced';
  controls: Array<{
    id: string;
    label: string;
    controlType: 'toggle' | 'momentary' | 'slider' | 'color_picker' | 'segmented' | 'dpad' | 'dial' | 'status_indicator';
    command: string;
    range?: { min: number; max: number; step?: number };
    options?: string[];
  }>;
}
