import { FinanceService } from "./finance.service";

export class FinanceController {
  constructor(private readonly financeService = new FinanceService()) {}

  addFunds(userId: string, amount: number) {
    return this.financeService.addFunds(userId, amount);
  }

  payout(userId: string, amount: number) {
    return this.financeService.payout(userId, amount);
  }
}
