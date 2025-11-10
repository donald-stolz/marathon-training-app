import { SupabaseContext } from "@/context/SupabaseContext";
import { useContext, useEffect, useState } from "react";
import { trainingPlan, Workout } from "@/lib/training-data";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const addWorkout = (workoutId: string) => {
  fetch(`/api/workouts`, {
    method: "POST",
    body: JSON.stringify({ workoutId }),
  });
};

const removeWorkout = (workoutId: string) => {
  fetch(`/api/workouts`, {
    method: "DELETE",
    body: JSON.stringify({ workoutId }),
  });
};

export const useTrainingPlan = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error(
      "useSupabase must be used within a SupabaseContext.Provider"
    );
  }
  const {
    data: completedWorkouts = [],
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/workouts`, fetcher);
  const toggleWorkout = (workoutId: string) => {
    let newCompletedWorkouts = completedWorkouts;
    if (
      completedWorkouts.some(
        (completed: Workout) => completed.workout_id === workoutId
      )
    ) {
      removeWorkout(workoutId);
      newCompletedWorkouts = newCompletedWorkouts.filter(
        (completed: Workout) => completed.workout_id !== workoutId
      );
    } else {
      addWorkout(workoutId);
      newCompletedWorkouts.push({ workout_id: workoutId } as Workout);
    }
    mutate(newCompletedWorkouts, {
      optimisticData: newCompletedWorkouts,
    });
  };

  const totalWorkouts = trainingPlan.reduce(
    (acc, week) => acc + week.workouts.length,
    0
  );
  const totalWeeks = trainingPlan.length;
  const completedCount = completedWorkouts.length;
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
