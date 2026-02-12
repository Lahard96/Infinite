export class AdminAuthGuard {
  canActivate(token?: string): boolean {
    return token === "demo-admin-token";
  }
}
