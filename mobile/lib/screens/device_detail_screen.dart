import 'package:flutter/material.dart';
class DeviceDetailScreen extends StatelessWidget {
  const DeviceDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Device Detail')),
      body: const Center(child: Text('Device Detail Screen')),
    );
  }
}
