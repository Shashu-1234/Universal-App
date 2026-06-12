export class VoiceService {
  mapCommandToAction(input: string): { action: string; args?: Record<string, string> } {
    const normalized = input.toLowerCase();
    if (normalized.includes('turn on')) return { action: 'turn_on' };
    if (normalized.includes('turn off')) return { action: 'turn_off' };
    if (normalized.includes('volume')) return { action: 'set_volume', args: { level: normalized.match(/\d+/)?.[0] ?? '50' } };
    return { action: 'unknown' };
  }
}
