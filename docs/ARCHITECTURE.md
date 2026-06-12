# Architecture

The system includes a Flutter mobile client and a Node.js + TypeScript backend.

- Discovery adapters normalize protocol-specific payloads into a canonical `DiscoveredDevice` model.
- Capability analysis computes security, pairing, and controllability metadata.
- Remote generation maps capability schemas into runtime UI controls.
- Action execution supports online execution and offline queue signaling.
