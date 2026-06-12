import 'package:flutter/services.dart';

class NativeChannelHandler {
  static const MethodChannel _channel = MethodChannel('universal_smart_remote/native');

  Future<List<dynamic>> scanBleDevices() async {
    return await _channel.invokeMethod<List<dynamic>>('scanBleDevices') ?? [];
  }
}
