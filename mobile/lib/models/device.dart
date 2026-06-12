class Device {
  Device({
    required this.id,
    required this.name,
    required this.type,
    required this.manufacturer,
    required this.model,
    required this.firmware,
    required this.status,
    required this.protocols,
    required this.controllabilityScore,
  });

  final String id;
  final String name;
  final String type;
  final String manufacturer;
  final String model;
  final String firmware;
  final String status;
  final List<String> protocols;
  final double controllabilityScore;
}
