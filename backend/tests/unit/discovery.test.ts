import test from 'node:test';
import assert from 'node:assert/strict';
import { DiscoveryEngine } from '../../src/services/discovery_engine.js';

test('discovery normalization excludes personal computing devices', async () => {
  const engine = new DiscoveryEngine();
  const discovered = await engine.discoverNearbyDevices();
  const analyzed = engine.normalizeAndAnalyze(discovered);
  const laptop = analyzed.find((d) => d.id === 'laptop-1');
  assert.ok(laptop);
  assert.equal(laptop.category, 'excluded');
  assert.equal(laptop.controllabilityScore, 0);
});
