class OfflineService {
  final List<Map<String, dynamic>> _queue = [];

  void enqueue(String deviceId, String command, [Map<String, dynamic>? payload]) {
    _queue.add({'deviceId': deviceId, 'command': command, 'payload': payload});
  }

  List<Map<String, dynamic>> drainQueue() {
    final copy = List<Map<String, dynamic>>.from(_queue);
    _queue.clear();
    return copy;
  }
}
