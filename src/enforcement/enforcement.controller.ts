import { EnforcementService } from "./enforcement.service";

export class EnforcementController {
  constructor(private readonly enforcementService = new EnforcementService()) {}

  suspend(userId: string) {
    return this.enforcementService.suspendUser(userId);
  }

  terminate(userId: string) {
    return this.enforcementService.terminateUser(userId);
  }
}
