import 'package:flutter/material.dart';
import '../screens/splash_screen.dart';
import '../screens/login_screen.dart';
import '../screens/home_screen.dart';
import '../screens/discovery_screen.dart';
import '../screens/device_detail_screen.dart';
import '../screens/remote_screen.dart';
import '../screens/routines_screen.dart';
import '../screens/settings_screen.dart';

final Map<String, WidgetBuilder> appRoutes = {
  '/': (_) => const SplashScreen(),
  '/login': (_) => const LoginScreen(),
  '/home': (_) => const HomeScreen(),
  '/discovery': (_) => const DiscoveryScreen(),
  '/device': (_) => const DeviceDetailScreen(),
  '/remote': (_) => const RemoteScreen(),
  '/routines': (_) => const RoutinesScreen(),
  '/settings': (_) => const SettingsScreen(),
};
