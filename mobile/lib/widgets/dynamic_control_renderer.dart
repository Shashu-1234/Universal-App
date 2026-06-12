import 'package:flutter/material.dart';

class DynamicControlRenderer extends StatelessWidget {
  const DynamicControlRenderer({super.key, required this.controls});

  final List<Map<String, dynamic>> controls;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: controls.map((control) {
        switch (control['controlType']) {
          case 'toggle':
            return SwitchListTile(value: true, onChanged: (_) {}, title: Text(control['label'] ?? 'Toggle'));
          case 'slider':
            final range = control['range'] ?? {'min': 0, 'max': 100};
            return Column(children: [Text(control['label'] ?? 'Slider'), Slider(value: 50, min: (range['min'] ?? 0).toDouble(), max: (range['max'] ?? 100).toDouble(), onChanged: (_) {})]);
          case 'dpad':
            return const Icon(Icons.gamepad);
          case 'color_picker':
            return const Icon(Icons.palette_outlined);
          case 'segmented':
            return SegmentedButton<String>(segments: const [ButtonSegment(value: 'a', label: Text('A')), ButtonSegment(value: 'b', label: Text('B'))], selected: const {'a'}, onSelectionChanged: (_) {});
          case 'status_indicator':
            return const ListTile(leading: Icon(Icons.circle, color: Colors.green), title: Text('Online'));
          default:
            return ElevatedButton(onPressed: () {}, child: Text(control['label'] ?? 'Action'));
        }
      }).toList(),
    );
  }
}
