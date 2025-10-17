import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AuthButtons } from "./auth-buttons";

interface ProgressStatsProps {
  completedCount: number;
  totalWorkouts: number;
  progressPercentage: number;
}

export function ProgressStats({
  completedCount,
  totalWorkouts,
  progressPercentage,
}: ProgressStatsProps) {
  return (
    <Card className="p-6 bg-card border-2">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold">Training Progress</h3>
            <AuthButtons />
          </div>
          <span className="text-3xl font-bold text-primary">
            {progressPercentage}%
          </span>
        </div>

        <Progress value={progressPercentage} className="h-3" />

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {completedCount} of {totalWorkouts} workouts completed
          </span>
          <span className="font-semibold text-foreground">
            {totalWorkouts - completedCount} remaining
          </span>
        </div>
      </div>
    </Card>
  );
}
