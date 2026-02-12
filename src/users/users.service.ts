export type UserRecord = {
  id: string;
  email: string;
  status: "active" | "suspended";
  role: "viewer" | "creator";
  isAdultVerified?: boolean;
  adultVerificationStatus?: "pending" | "approved" | "rejected";
  adultEnabled?: boolean;
};

export type UploadPolicyDecision = {
  allowed: boolean;
  reason?: string;
};

export class UsersService {
  private readonly users: UserRecord[] = [
    {
      id: "u1",
      email: "creator@infinite.network",
      status: "active",
      role: "creator",
      isAdultVerified: false,
      adultVerificationStatus: "pending",
      adultEnabled: false,
    },
    { id: "u2", email: "viewer@infinite.network", status: "active", role: "viewer" },
  ];

  findAll(): UserRecord[] {
    return this.users;
  }

  findById(id: string): UserRecord | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateProfile(userId: string, profile: { displayName?: string; bio?: string }) {
    const user = this.findById(userId);

    if (!user) {
      return { success: false, message: "User not found." };
    }

    return { success: true, userId, profile };
  }

  uploadSkin(userId: string, fileUrl: string) {
    const user = this.findById(userId);

    if (!user) {
      return { success: false, message: "User not found." };
    }

    return { success: true, userId, fileUrl };
  }

  validateAdultUpload(creatorId: string, isAdult: boolean): UploadPolicyDecision {
    const creator = this.users.find((user) => user.id === creatorId && user.role === "creator");

    if (!creator) {
      return { allowed: false, reason: "Creator account not found." };
    }

    if (isAdult && !creator.isAdultVerified) {
      return { allowed: false, reason: "Verification required for adults-only content." };
    }

    return { allowed: true };
  }
}
