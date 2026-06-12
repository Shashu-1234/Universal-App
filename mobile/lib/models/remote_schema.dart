class RemoteSchema {
  RemoteSchema({
    required this.deviceId,
    this.controls = const [],
    this.groups = const [],
    this.layout = const {},
  });

  final String deviceId;
  final List<Map<String, dynamic>> controls;
  final List<Map<String, dynamic>> groups;
  final Map<String, dynamic> layout;
}
