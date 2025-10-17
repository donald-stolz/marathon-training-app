"use client";
import { TrainingPlanHeader } from "@/components/training-plan-header";
import { WeekCard } from "@/components/week-card";
import { ProgressStats } from "@/components/progress-stats";
import { Button } from "@/components/ui/button";
import { Lock, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useTrainingPlan } from "@/hooks/useTrainingPlan";
import Link from "next/link";

export function TrainingPlan() {
  const { user, signOut } = useAuth();
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
      <TrainingPlanHeader totalWeeks={totalWeeks} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-end mb-4">
          {user ? (
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-1 mb-0.5" />
              Sign out
            </Button>
          ) : (
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                <Lock className="h-4 w-4 mr-1 mb-0.5" />
                Sign in
              </Button>
            </Link>
          )}
        </div>

        <ProgressStats
          completedCount={completedCount}
          totalWorkouts={totalWorkouts}
          progressPercentage={progressPercentage}
        />

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
