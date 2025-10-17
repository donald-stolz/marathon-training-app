"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const pacingData = [
  {
    runType: "Easy/Recovery",
    purpose: "Build Base, Flush Legs",
    targetPace: "9:30 - 10:00/mile",
    effortLevel: "Conversational (4/10)",
  },
  {
    runType: "Marathon Pace (MP)",
    purpose: "Train Body for Race Day",
    targetPace: "8:00/mile",
    effortLevel: "Controlled Hard (7/10)",
  },
  {
    runType: "Tempo/Threshold",
    purpose: "Increase Stamina (Lactate Threshold)",
    targetPace: "8:15 - 8:30/mile",
    effortLevel: '"Comfortably Hard" (7.5/10)',
  },
  {
    runType: "Speed (Intervals)",
    purpose: "Increase Speed Reserve (VO2 Max)",
    targetPace: "7:00 - 7:30/mile",
    effortLevel: "Hard (8-9/10)",
  },
  {
    runType: "Long Run",
    purpose: "Time on Feet, Endurance",
    targetPace: "9:30 - 10:30/mile",
    effortLevel: "Very Easy (3-4/10)",
  },
];

export function PacingGuideCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-border bg-card">
      <CardHeader className="-mb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 flex-1">
            <CardTitle className="text-2xl font-bold text-foreground">
              16-Week Marathon Training Plan: Achieving the 8:00/Mile Pace
            </CardTitle>
            <div className="space-y-1 text-sm text-foreground">
              <p>
                <span className="font-semibold">Goal Pace:</span> 8:00/mile
                (Target Marathon Time: 3 hours, 29 minutes, 36 seconds){" "}
              </p>
              <p>
                <span className="font-semibold">Current Fitness:</span>{" "}
                Comfortably running at a 9:00/mile pace.
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="shrink-0"
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
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Pacing Guide (CRITICAL)
            </h3>
            <p className="text-sm text-foreground">
              To prevent burnout and injury,{" "}
              <span className="font-semibold">
                your easy pace must be slower
              </span>{" "}
              than your goal pace. This builds your aerobic base, which is the
              engine for marathon running.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Run Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Purpose
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Target Pace
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Effort Level (RPE)
                  </th>
                </tr>
              </thead>
              <tbody>
                {pacingData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      {row.runType}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {row.purpose}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {row.targetPace}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {row.effortLevel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
