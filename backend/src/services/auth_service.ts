import { randomUUID } from 'node:crypto';

type RefreshEntry = { userId: string; expiresAt: number };

export class AuthService {
  private readonly refreshStore = new Map<string, RefreshEntry>();

  issueTokens(userId: string): { accessToken: string; refreshToken: string; expiresIn: number } {
    const accessToken = `access_${randomUUID()}`;
    const refreshToken = `refresh_${randomUUID()}`;
    this.refreshStore.set(refreshToken, { userId, expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30 });
    return { accessToken, refreshToken, expiresIn: 3600 };
  }

  refresh(refreshToken: string): { accessToken: string; expiresIn: number } | null {
    const entry = this.refreshStore.get(refreshToken);
    if (!entry || entry.expiresAt < Date.now()) return null;
    return { accessToken: `access_${randomUUID()}`, expiresIn: 3600 };
  }
}
