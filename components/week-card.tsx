import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import type { Week, WorkoutResult } from "@/lib/training-data";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

interface WeekCardProps {
  week: Week;
  completedWorkouts: WorkoutResult[];
  onToggleWorkout: (workoutId: string) => void;
}

export function WeekCard({
  week,
  completedWorkouts,
  onToggleWorkout,
}: WeekCardProps) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const firstWorkout = completedWorkouts.sort(
      (a, b) =>
        new Date(a.completed_at).getTime() - new Date(b.completed_at).getTime()
    )[0];
    if (firstWorkout) {
      console.log(firstWorkout);
      const currentWeek =
        Math.round(
          (new Date().getTime() -
            new Date(firstWorkout.completed_at).getTime()) /
            (1000 * 60 * 60 * 24 * 7)
        ) + 1;
      console.log(currentWeek);
      setIsOpen(currentWeek === week.week);
    }
  }, [completedWorkouts]);

  const completedInWeek = week.workouts.filter((w) =>
    completedWorkouts.some((completed) => completed.workout_id === w.workout_id)
  ).length;
  const isWeekComplete = completedInWeek === week.workouts.length;

  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <Card
      className={`p-6 transition-all hover:shadow-lg h-[max-content] ${
        isWeekComplete ? "border-primary border-2" : ""
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">Week {week.week}</h3>
            <p className="text-sm text-muted-foreground mt-1">{week.focus}</p>
          </div>
          {isWeekComplete && (
            <Badge className="bg-primary text-primary-foreground">
              Complete
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleOpen}
            className="shrink-0 hover:text-inherit hover:cursor-pointer"
          >
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isOpen && (
          <div className="space-y-3">
            {week.workouts.map((workout) => {
              const workoutId = workout.workout_id;
              const isCompleted = completedWorkouts.some(
                (completed) => completed.workout_id === workout.workout_id
              );

              return (
                <div
                  key={workoutId}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Checkbox
                    id={workoutId}
                    checked={isCompleted}
                    onCheckedChange={() => onToggleWorkout(workoutId)}
                    className="mt-1"
                  />
                  <label
                    htmlFor={workoutId}
                    className="flex-1 cursor-pointer space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {workout.day}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {workout.type}
                      </Badge>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        isCompleted
                          ? "line-through text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {workout.description}
                    </p>
                  </label>
                </div>
              );
            })}
          </div>
        )}

        <div className="pt-2 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold">
              {completedInWeek}/{week.workouts.length} workouts
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
