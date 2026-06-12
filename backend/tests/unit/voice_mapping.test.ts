import test from 'node:test';
import assert from 'node:assert/strict';
import { VoiceService } from '../../src/services/voice_service.js';

const voice = new VoiceService();

test('voice command mapping identifies intent and numeric argument', () => {
  assert.deepEqual(voice.mapCommandToAction('Turn on the TV'), { action: 'turn_on' });
  assert.deepEqual(voice.mapCommandToAction('set volume to 27'), { action: 'set_volume', args: { level: '27' } });
});
