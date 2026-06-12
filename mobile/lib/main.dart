import 'package:flutter/material.dart';
import 'config/theme.dart';

void main() {
  runApp(const UniversalSmartRemoteApp());
}

class UniversalSmartRemoteApp extends StatelessWidget {
  const UniversalSmartRemoteApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Universal Smart Remote AI',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      home: const Scaffold(
        body: Center(child: Text('Universal Smart Remote AI')),
      ),
    );
  }
}
