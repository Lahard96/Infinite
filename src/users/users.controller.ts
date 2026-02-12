import { UsersService } from "./users.service";

export class UsersController {
  constructor(private readonly usersService = new UsersService()) {}

  getUsers() {
    return this.usersService.findAll();
  }

  getUserById(id: string) {
    return this.usersService.findById(id);
  }

  updateProfile(userId: string, profile: { displayName?: string; bio?: string }) {
    return this.usersService.updateProfile(userId, profile);
  }

  uploadSkin(userId: string, fileUrl: string) {
    return this.usersService.uploadSkin(userId, fileUrl);
  }

  // Creator Dashboard -> Monetization -> Adults-Only Content gate
  validateAdultUpload(creatorId: string, isAdult: boolean) {
    return this.usersService.validateAdultUpload(creatorId, isAdult);
  }
}
