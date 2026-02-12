import { AdminService } from "./admin.service";

export class AdminController {
  constructor(private readonly adminService = new AdminService()) {}

  getDashboard() {
    return this.adminService.getAdminDashboard();
  }

  // POST /admin/users/:id/suspend
  suspendUser(id: string) {
    return this.adminService.suspendUser(id);
  }

  // POST /admin/users/:id/soft-terminate
  softTerminateUser(id: string) {
    return this.adminService.softTerminateUser(id);
  }

  // POST /admin/users/:id/hybrid-terminate
  hybridTerminateUser(id: string) {
    return this.adminService.hybridTerminateUser(id);
  }

  // POST /admin/users/:id/terminate
  terminateUser(id: string) {
    return this.adminService.terminateUser(id);
  }

  // POST /admin/users/:id/freeze-wallet
  freezeWallet(id: string) {
    return this.adminService.freezeWallet(id);
  }

  // POST /admin/users/:id/restore
  restoreUser(id: string) {
    return this.adminService.restoreUser(id);
  }

  // GET /admin/adults-only-review/:status
  adultsOnlyReview(status: "pending" | "approved" | "rejected") {
    return this.adminService.listAdultVerifications(status);
  }

  // POST /admin/adults-only-review/:creatorId/approve
  approveAdultVerification(creatorId: string, adminId: string) {
    return this.adminService.reviewAdultVerification(creatorId, "approved", adminId);
  }

  // POST /admin/adults-only-review/:creatorId/reject
  rejectAdultVerification(creatorId: string, adminId: string) {
    return this.adminService.reviewAdultVerification(creatorId, "rejected", adminId);
  }
}
