import { AdminService } from "../admin/admin.service";
import { FinanceService } from "../finance/finance.service";
import { UsersService } from "../users/users.service";

const usersService = new UsersService();
const financeService = new FinanceService();
const adminService = new AdminService();

export const api = {
  profile: {
    updateProfile: (userId: string, profile: { displayName?: string; bio?: string }) =>
      usersService.updateProfile(userId, profile),
    uploadSkin: (userId: string, fileUrl: string) => usersService.uploadSkin(userId, fileUrl),
  },
  wallet: {
    addFunds: (userId: string, amount: number) => financeService.addFunds(userId, amount),
    payout: (userId: string, amount: number) => financeService.payout(userId, amount),
  },
  admin: {
    suspendUser: (id: string) => adminService.suspendUser(id),
    terminateUser: (id: string) => adminService.terminateUser(id),
  },
};
