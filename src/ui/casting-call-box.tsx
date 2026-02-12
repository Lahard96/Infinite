import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CastingCallBox() {
  return (
    <Card className="mx-auto max-w-3xl rounded-2xl border-white/10 bg-black/60">
      <CardContent className="space-y-6 p-8">
        <div>
          <h2 className="text-2xl font-semibold">🎬 Casting Call</h2>
          <p className="text-sm text-white/60">
            We are currently casting for upcoming shows. Submit your audition below.
          </p>
        </div>

        <div className="space-y-4">
          <Input placeholder="Full Name" />
          <Input type="date" placeholder="Date of Birth" />

          <textarea
            className="w-full rounded-md border border-white/10 bg-black/40 p-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            rows={4}
            placeholder="Tell us about your experience and why you want to audition..."
          />

          <Button className="w-full">Submit Audition</Button>
        </div>
      </CardContent>
    </Card>
  );
}
