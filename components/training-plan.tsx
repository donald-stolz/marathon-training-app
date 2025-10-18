"use client";
import { TrainingPlanHeader } from "@/components/training-plan-header";
import { WeekCard } from "@/components/week-card";
import { ProgressStats } from "@/components/progress-stats";
import { useTrainingPlan } from "@/hooks/useTrainingPlan";
import { PacingGuideCard } from "./pacing-guide-card";
import { WorkoutSpecificsCard } from "./workout-specifics-card";

export function TrainingPlan() {
  const {
    trainingPlan,
    totalWorkouts,
    totalWeeks,
    completedCount,
    progressPercentage,
    toggleWorkout,
    completedWorkouts,
  } = useTrainingPlan();

  return (
    <main className="min-h-screen bg-background">
      {/* Training plan header */}
      <TrainingPlanHeader totalWeeks={totalWeeks} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Progress stats */}
        <ProgressStats
          completedCount={completedCount}
          totalWorkouts={totalWorkouts}
          progressPercentage={progressPercentage}
        />
        <div className="my-4 space-y-6">
          {/* Pacing guide card */}
          <PacingGuideCard />
        </div>
        {/* Workout specifics card */}
        <WorkoutSpecificsCard />
        {/* Training plan */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            {totalWeeks}-Week Training Plan
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingPlan.map((week) => (
              <WeekCard
                key={week.week}
                week={week}
                completedWorkouts={completedWorkouts}
                onToggleWorkout={toggleWorkout}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
