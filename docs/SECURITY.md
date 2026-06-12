# Security

- OAuth2/OIDC-compatible access and refresh token flow scaffolding is implemented in `AuthService`.
- Pairing and security requirements are tracked per device.
- Sensitive communications are expected to run over TLS in deployment.
- Token refresh endpoints are available for mobile session continuity.
