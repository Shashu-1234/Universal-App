export const env = {
  port: Number(process.env.PORT ?? 3000),
  oauthIssuer: process.env.OAUTH_ISSUER ?? 'https://auth.example.com',
  oauthAudience: process.env.OAUTH_AUDIENCE ?? 'universal-remote-api'
};
