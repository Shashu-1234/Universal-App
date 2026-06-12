import { DiscoveryAdapter } from './adapter.js';
import { DiscoveredDevice } from '../types/index.js';

const sample: DiscoveredDevice[] = [
  {
    id: 'tv-1',
    manufacturer: 'Samsung',
    model: 'QN90',
    firmware: '1.0.2',
    protocol: 'ssdp',
    category: 'tv',
    ip: '192.168.1.30',
    securityRequirements: ['oauth2'],
    pairingRequired: true,
    apiAvailable: true,
    capabilities: [
      { id: 'power', type: 'power', commands: ['power_on', 'power_off', 'toggle_power'] },
      { id: 'volume', type: 'volume', commands: ['volume_up', 'volume_down', 'mute'], range: { min: 0, max: 100, step: 1 } },
      { id: 'nav', type: 'navigation', commands: ['up', 'down', 'left', 'right', 'ok', 'back'] }
    ]
  },
  {
    id: 'laptop-1',
    manufacturer: 'Apple',
    model: 'MacBook Pro',
    firmware: '14.5',
    protocol: 'mdns',
    category: 'other',
    ip: '192.168.1.8',
    securityRequirements: ['none'],
    pairingRequired: false,
    apiAvailable: false,
    capabilities: []
  },
  {
    id: 'light-1',
    manufacturer: 'Philips',
    model: 'Hue Color',
    firmware: '5.2.1',
    protocol: 'matter',
    category: 'light',
    ip: '192.168.1.44',
    securityRequirements: ['matter_pairing'],
    pairingRequired: true,
    apiAvailable: true,
    capabilities: [
      { id: 'light-power', type: 'power', commands: ['turn_on', 'turn_off'] },
      { id: 'brightness', type: 'brightness', commands: ['set_brightness'], range: { min: 0, max: 100, step: 1 } },
      { id: 'color', type: 'color', commands: ['set_color'] }
    ]
  }
];

class MockAdapter implements DiscoveryAdapter {
  constructor(public protocolName: string) {}

  async discover(): Promise<DiscoveredDevice[]> {
    return sample.filter((device) => device.protocol === this.protocolName);
  }
}

export const adapters: DiscoveryAdapter[] = [
  new MockAdapter('mdns'),
  new MockAdapter('ssdp'),
  new MockAdapter('matter'),
  new MockAdapter('alexa'),
  new MockAdapter('google_home'),
  new MockAdapter('homekit'),
  new MockAdapter('smartthings'),
  new MockAdapter('ble')
];
