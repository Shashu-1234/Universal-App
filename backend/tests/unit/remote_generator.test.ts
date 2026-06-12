import test from 'node:test';
import assert from 'node:assert/strict';
import { RemoteGenerator } from '../../src/services/remote_generator.js';

const generator = new RemoteGenerator();

test('remote schema generation maps slider and dpad controls', () => {
  const schema = generator.generate({
    id: 'tv-1',
    manufacturer: 'Samsung',
    model: 'QN90',
    firmware: '1.0',
    protocol: 'ssdp',
    category: 'tv',
    securityRequirements: [],
    pairingRequired: true,
    apiAvailable: true,
    controllabilityScore: 90,
    capabilities: [
      { id: 'volume', type: 'volume', commands: ['set_volume'], range: { min: 0, max: 100 } },
      { id: 'nav', type: 'navigation', commands: ['up'] }
    ]
  });

  assert.equal(schema.deviceId, 'tv-1');
  assert.equal(schema.controls[0].controlType, 'slider');
  assert.equal(schema.controls[1].controlType, 'dpad');
});
