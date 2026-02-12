export type FinanceAction = "funds_added" | "payout_processed" | "wallet_frozen";

export type FinanceResult = {
  success: boolean;
  userId: string;
  action: FinanceAction;
  amount?: number;
};

export class FinanceService {
  addFunds(userId: string, amount: number): FinanceResult {
    return {
      success: amount > 0,
      userId,
      amount,
      action: "funds_added",
    };
  }

  payout(userId: string, amount: number): FinanceResult {
    return {
      success: amount > 0,
      userId,
      amount,
      action: "payout_processed",
    };
  }

  freezeWallet(userId: string): FinanceResult {
    return {
      success: true,
      userId,
      action: "wallet_frozen",
    };
  }
}
