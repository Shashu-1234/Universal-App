export interface Routine {
  id: string;
  name: string;
  actions: Array<{ deviceId: string; command: string; payload?: unknown }>;
}

export const defaultRoutines: Routine[] = [
  { id: 'movie-mode', name: 'Movie Mode', actions: [{ deviceId: 'tv-1', command: 'power_on' }] },
  { id: 'bedtime-mode', name: 'Bedtime Mode', actions: [{ deviceId: 'light-1', command: 'turn_off' }] },
  { id: 'morning-routine', name: 'Morning Routine', actions: [{ deviceId: 'light-1', command: 'turn_on' }] },
  { id: 'away-mode', name: 'Away Mode', actions: [{ deviceId: 'light-1', command: 'turn_off' }] }
];
