import { SupabaseContext } from "@/context/SupabaseContext";
import { useContext, useState } from "react";
import { trainingPlan } from "@/lib/training-data";

export const useTrainingPlan = () => {
  const context = useContext(SupabaseContext);

  if (context === undefined) {
    throw new Error(
      "useSupabase must be used within a SupabaseContext.Provider"
    );
  }
  const { user, supabase } = context;

  if (!supabase) {
    throw new Error("Supabase client not found");
  }
  const [completedWorkouts, setCompletedWorkouts] = useState<Set<string>>(
    //   initialCompletedWorkouts
    new Set()
  );

  const toggleWorkout = async (workoutId: string) => {
    const isCompleted = completedWorkouts.has(workoutId);

    // Optimistic update
    setCompletedWorkouts((prev) => {
      const newSet = new Set(prev);
      if (isCompleted) {
        newSet.delete(workoutId);
      } else {
        newSet.add(workoutId);
      }
      return newSet;
    });

    // Update database
    if (!user) return;
    const userId = user.id;
    try {
      if (isCompleted) {
        await supabase
          .from("workout_progress")
          .delete()
          .eq("workout_id", workoutId)
          .eq("user_id", userId);
      } else {
        await supabase.from("workout_progress").insert({
          user_id: userId,
          workout_id: workoutId,
          completed_at: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error("Error updating workout progress:", error);
      // Revert optimistic update on error
      setCompletedWorkouts((prev) => {
        const newSet = new Set(prev);
        if (isCompleted) {
          newSet.add(workoutId);
        } else {
          newSet.delete(workoutId);
        }
        return newSet;
      });
    }
  };

  const totalWorkouts = trainingPlan.reduce(
    (acc, week) => acc + week.workouts.length,
    0
  );
  const totalWeeks = trainingPlan.length;
  const completedCount = completedWorkouts.size;
  const progressPercentage = Math.round((completedCount / totalWorkouts) * 100);

  return {
    completedWorkouts,
    trainingPlan,
    totalWorkouts,
    totalWeeks,
    completedCount,
    progressPercentage,
    toggleWorkout,
  };
};
