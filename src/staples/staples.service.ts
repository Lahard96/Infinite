export type CreatorTierRecord = {
  id: string;
  name: string;
  monthlyPrice: number;
  uploadLimit: number | "unlimited";
  schedulingAccess: "off-peak" | "flexible" | "full";
  primetimeAccess: boolean | "limited";
  adRevenueShare?: number;
  liveStreamLimitHours?: number;
  ppvIncluded?: number;
  passwordProtectionIncluded?: boolean;
  subleasingEnabled?: boolean;
  allowedAddOnNames?: string[];
};

export type RentalRequest = {
  creatorId: string;
  tierId: string;
  slotType: "1hr" | "3hr" | "full-day";
  price: number;
  timeSlot: "off-peak" | "primetime";
};

export type AddOnRequest = {
  tierId: string;
  name: string;
  price: number;
  duration: "daily" | "monthly" | "biweekly";
};

export class StaplesService {
  private readonly creatorTiers: CreatorTierRecord[] = [
    {
      id: "tier-starter",
      name: "Starter",
      monthlyPrice: 80,
      uploadLimit: 30,
      schedulingAccess: "off-peak",
      primetimeAccess: false,
      allowedAddOnNames: ["analytics-lite"],
    },
    {
      id: "tier-basic",
      name: "Basic",
      monthlyPrice: 105,
      uploadLimit: 35,
      schedulingAccess: "flexible",
      primetimeAccess: false,
      liveStreamLimitHours: 4,
      allowedAddOnNames: ["analytics-lite", "promo-boost"],
    },
    {
      id: "tier-growth",
      name: "Growth",
      monthlyPrice: 150,
      uploadLimit: "unlimited",
      schedulingAccess: "full",
      primetimeAccess: "limited",
      adRevenueShare: 0.2,
      ppvIncluded: 1,
      allowedAddOnNames: ["analytics-pro", "promo-boost", "priority-review"],
    },
    {
      id: "tier-pro",
      name: "Pro",
      monthlyPrice: 199,
      uploadLimit: "unlimited",
      schedulingAccess: "full",
      primetimeAccess: true,
      adRevenueShare: 0.35,
      passwordProtectionIncluded: true,
      subleasingEnabled: true,
      allowedAddOnNames: ["analytics-pro", "promo-boost", "priority-review", "sublease-plus"],
    },
  ];

  getFeed() {
    return {
      section: "feed",
      items: [],
    };
  }

  getMusic() {
    return {
      section: "music",
      items: [],
    };
  }

  getProduction() {
    return {
      section: "production",
      items: [],
    };
  }

  getCreatorTiers(): CreatorTierRecord[] {
    return this.creatorTiers;
  }

  createRental(input: RentalRequest) {
    const tier = this.creatorTiers.find((candidate) => candidate.id === input.tierId);

    if (!tier) {
      return { success: false, reason: "Tier not found.", action: "rejectRental" as const };
    }

    if (!this.allowsSchedulingAt(tier, input.timeSlot)) {
      return {
        success: false,
        reason: "Creator tier does not allow scheduling at this time slot.",
        action: "rejectRental" as const,
      };
    }

    return { success: true, rental: input };
  }

  createAddOn(input: AddOnRequest) {
    const tier = this.creatorTiers.find((candidate) => candidate.id === input.tierId);

    if (!tier) {
      return { success: false, reason: "Tier not found.", action: "blockAddOn" as const };
    }

    if (!this.allowsAddOn(tier, input.name)) {
      return {
        success: false,
        reason: "Tier does not allow this add-on.",
        action: "blockAddOn" as const,
      };
    }

    return { success: true, addOn: input };
  }

  private allowsSchedulingAt(tier: CreatorTierRecord, timeSlot: "off-peak" | "primetime"): boolean {
    if (tier.schedulingAccess === "full") {
      return true;
    }

    if (tier.schedulingAccess === "off-peak") {
      return timeSlot === "off-peak";
    }

    return timeSlot !== "primetime";
  }

  private allowsAddOn(tier: CreatorTierRecord, addOnName: string): boolean {
    return Boolean(tier.allowedAddOnNames?.includes(addOnName));
  }
}
