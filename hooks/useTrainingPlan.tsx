import { SupabaseContext } from "@/context/SupabaseContext";
import { useContext, useEffect, useState } from "react";
import { trainingPlan } from "@/lib/training-data";
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
    data = [],
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/workouts`, fetcher);
  const completedWorkouts = new Set(data);
  const toggleWorkout = (workoutId: string) => {
    const newCompletedWorkouts = new Set(completedWorkouts);
    if (completedWorkouts.has(workoutId)) {
      removeWorkout(workoutId);
      newCompletedWorkouts.delete(workoutId);
    } else {
      addWorkout(workoutId);
      newCompletedWorkouts.add(workoutId);
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
  const completedCount = completedWorkouts.size;
  const progressPercentage = Math.round((completedCount / totalWorkouts) * 100);

  console.log(completedWorkouts);
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
