import 'command.dart';

class Capability {
  Capability({
    required this.type,
    this.commands = const [],
    required this.authRequired,
    required this.confidenceScore,
  });

  final String type;
  final List<Command> commands;
  final bool authRequired;
  final double confidenceScore;
}
