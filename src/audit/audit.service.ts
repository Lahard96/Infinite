export type AdminLoginRequest = {
  email: string;
  password: string;
};

export type AdminAuthResult = {
  success: boolean;
  token?: string;
  message: string;
};

export class AdminAuthService {
  async login(payload: AdminLoginRequest): Promise<AdminAuthResult> {
    const isValid = Boolean(payload.email && payload.password);

    if (!isValid) {
      return {
        success: false,
        message: "Email and password are required.",
      };
    }

    return {
      success: true,
      token: "demo-admin-token",
      message: "Admin authenticated.",
    };
  }
}
