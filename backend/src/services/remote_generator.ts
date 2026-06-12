import { DeviceAnalysis, DeviceCapability, RemoteControlSchema } from '../types/index.js';

export class RemoteGenerator {
  generate(device: DeviceAnalysis): RemoteControlSchema {
    const controls = device.capabilities.flatMap((capability) => this.mapCapabilityToControls(capability));

    return {
      deviceId: device.id,
      layout: controls.length > 8 ? 'advanced' : controls.length > 4 ? 'standard' : 'compact',
      controls
    };
  }

  mapCapabilityToControls(capability: DeviceCapability): RemoteControlSchema['controls'] {
    switch (capability.type) {
      case 'power':
        return [{ id: capability.id, label: 'Power', controlType: 'toggle', command: capability.commands[0] ?? 'toggle_power' }];
      case 'volume':
      case 'brightness':
      case 'temperature':
        return [{ id: capability.id, label: capability.type, controlType: 'slider', command: capability.commands[0] ?? 'set_value', range: capability.range }];
      case 'color':
        return [{ id: capability.id, label: 'Color', controlType: 'color_picker', command: capability.commands[0] ?? 'set_color' }];
      case 'navigation':
        return [{ id: capability.id, label: 'Navigation', controlType: 'dpad', command: capability.commands[0] ?? 'navigate' }];
      case 'media':
        return [{ id: capability.id, label: 'Media', controlType: 'segmented', command: capability.commands[0] ?? 'media_command', options: capability.commands }];
      case 'status':
        return [{ id: capability.id, label: 'Status', controlType: 'status_indicator', command: capability.commands[0] ?? 'read_status' }];
      default:
        return [{ id: capability.id, label: capability.type, controlType: 'momentary', command: capability.commands[0] ?? 'execute' }];
    }
  }
}
