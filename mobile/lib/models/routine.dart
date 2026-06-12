class Routine {
  Routine({
    required this.name,
    required this.triggerType,
    this.actions = const [],
    required this.enabled,
  });

  final String name;
  final String triggerType;
  final List<Map<String, dynamic>> actions;
  final bool enabled;
}
