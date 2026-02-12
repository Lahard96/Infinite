export type EnforcementAction =
  | "suspended"
  | "soft_terminated"
  | "hybrid_terminated"
  | "restored";

export type EnforcementResult = {
  success: boolean;
  userId: string;
  action: EnforcementAction;
};

export class EnforcementService {
  suspendUser(userId: string): EnforcementResult {
    return {
      success: true,
      userId,
      action: "suspended",
    };
  }

  softTerminateUser(userId: string): EnforcementResult {
    return {
      success: true,
      userId,
      action: "soft_terminated",
    };
  }

  hybridTerminateUser(userId: string): EnforcementResult {
    return {
      success: true,
      userId,
      action: "hybrid_terminated",
    };
  }

  restoreUser(userId: string): EnforcementResult {
    return {
      success: true,
      userId,
      action: "restored",
    };
  }
}
