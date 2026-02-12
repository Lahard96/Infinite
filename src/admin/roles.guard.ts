export class RolesGuard {
  canActivate(requiredRole: string, userRole: string): boolean {
    return requiredRole === userRole;
  }
}
