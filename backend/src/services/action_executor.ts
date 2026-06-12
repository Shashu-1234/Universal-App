import { DeviceAnalysis } from '../types/index.js';

export class ActionExecutor {
  async execute(device: DeviceAnalysis, command: string, payload?: unknown): Promise<{ success: boolean; queuedOffline: boolean }> {
    if (!device.apiAvailable) {
      return { success: false, queuedOffline: true };
    }

    void payload;
    void command;
    return { success: true, queuedOffline: false };
  }
}
