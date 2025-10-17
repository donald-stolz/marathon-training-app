"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WorkoutSpecificsCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-border bg-card">
      <CardHeader className="-mb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl font-bold text-foreground mb-0">
            Workout Specifics
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="shrink-0 pb-2"
          >
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </Button>
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent className="space-y-6">
          {/* Tuesday: Speed Work */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Tuesday: Speed Work (Intervals)
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              Focus on running repetitions{" "}
              <span className="font-semibold">faster</span> than your goal pace
              (aim for 7:00-7:30/mile) with ample rest to recover. This builds
              top-end speed and running economy.
            </p>
            <ul className="space-y-1.5 ml-5 list-disc text-sm text-foreground">
              <li>
                <span className="font-semibold">Format:</span> 1.5M Warm-up
                (WU), Intervals with walking/jogging rest (Rest Interval, RI),
                1M Cool-down (CD).
              </li>
              <li>
                <span className="font-semibold">Example (Week 5):</span> 1.5M
                WU, then 4 × 1200m (3 laps) at 7:20/mile pace, with 4 minutes of
                slow jogging/walking RI, followed by 1M CD.
              </li>
            </ul>
          </div>

          {/* Thursday: Marathon Pace */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Thursday: Marathon Pace (MP) Run
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              These are designed to teach your body and mind what{" "}
              <span className="font-semibold">8:00/mile</span> feels like under
              increasing fatigue. The mileage is always structured: Easy Warm-up
              → <span className="font-semibold">MP Segment</span> → Easy
              Cool-down.
            </p>
            <ul className="space-y-1.5 ml-5 list-disc text-sm text-foreground">
              <li>
                <span className="font-semibold">Example (Week 9):</span> 2M Easy
                WU, then 6M at your{" "}
                <span className="font-semibold">8:00/mile MP</span>, followed by
                2M Easy CD.
              </li>
            </ul>
          </div>

          {/* Sunday: Long Run */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Sunday: Long Run (LR)
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              The most important run for endurance. Run these at your{" "}
              <span className="font-semibold">Easy/Recovery pace</span>{" "}
              (9:30-10:30/mile). Only introduce your MP into the Long Run after
              Week 10 for the last few miles, if you feel strong. For example,
              in Week 11, try the last 3-4 miles at 8:30/mile pace.
            </p>
          </div>

          {/* Cross-Training & Strength */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Cross-Training & Strength (Monday/Wednesday/Friday)
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              Use these days for low-impact work (cycling, swimming, yoga,
              lifting). Focus on{" "}
              <span className="font-semibold">strength training</span> to build
              core, glute, and hip stability, which is vital for preventing
              injury as mileage increases.
            </p>
          </div>

          {/* General Training Rules */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-semibold text-foreground">
              General Training Rules
            </h3>
            <ol className="space-y-3 ml-5 list-decimal text-sm text-foreground">
              <li>
                <span className="font-semibold">
                  Never Increase Volume Too Quickly:
                </span>{" "}
                The Long Run increase is gradual to prevent injury. Do not skip
                weeks or jump ahead.
              </li>
              <li>
                <span className="font-semibold">Practice Fueling:</span> During
                your long runs of 13 miles or more, practice taking in gels,
                chews, or sports drinks every 45 — 60 minutes. Use what you plan
                to use on race day!
              </li>
              <li>
                <span className="font-semibold">Taper is Non-Negotiable:</span>{" "}
                The final three weeks (Taper Phase) reduce mileage significantly
                to allow your body to heal and store energy. Trust the taper—the
                fitness is already in the bank.
              </li>
            </ol>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
