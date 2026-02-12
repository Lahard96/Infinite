import { StaplesService } from "./staples.service";

export class StaplesController {
  constructor(private readonly staplesService = new StaplesService()) {}

  feed() {
    return this.staplesService.getFeed();
  }

  music() {
    return this.staplesService.getMusic();
  }

  production() {
    return this.staplesService.getProduction();
  }

  // GET /api/creator-tiers
  getCreatorTiers() {
    return this.staplesService.getCreatorTiers();
  }

  createRental(input: {
    creatorId: string;
    tierId: string;
    slotType: "1hr" | "3hr" | "full-day";
    price: number;
    timeSlot: "off-peak" | "primetime";
  }) {
    return this.staplesService.createRental(input);
  }

  createAddOn(input: {
    tierId: string;
    name: string;
    price: number;
    duration: "daily" | "monthly" | "biweekly";
  }) {
    return this.staplesService.createAddOn(input);
  }
}
