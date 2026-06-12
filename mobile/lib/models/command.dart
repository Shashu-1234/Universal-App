class Command {
  Command({
    required this.name,
    required this.capability,
    required this.controlType,
    required this.domain,
    this.parameters = const {},
  });

  final String name;
  final String capability;
  final String controlType;
  final String domain;
  final Map<String, dynamic> parameters;
}
