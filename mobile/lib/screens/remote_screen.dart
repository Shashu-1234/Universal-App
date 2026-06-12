import 'package:flutter/material.dart';
import '../widgets/dynamic_control_renderer.dart';

class RemoteScreen extends StatelessWidget {
  const RemoteScreen({super.key});

  @override
  Widget build(BuildContext context) {
    const controls = [
      {'label': 'Power', 'controlType': 'toggle'},
      {
        'label': 'Volume',
        'controlType': 'slider',
        'range': {'min': 0, 'max': 100}
      },
      {'label': 'Navigation', 'controlType': 'dpad'},
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Remote')),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: DynamicControlRenderer(controls: controls),
      ),
    );
  }
}
