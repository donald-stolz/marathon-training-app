import { createClient } from "@/lib/supabase/server";
import { Workout } from "@/lib/training-data";
import { type NextRequest, NextResponse } from "next/server";

const getWorkouts = async (userId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("workout_progress")
    .select("workout_id")
    .eq("user_id", userId);
  if (error) {
    throw error;
  }
  return data.map((workout) => workout.workout_id) as string[];
};

const addWorkout = async (userId: string, workoutId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("workout_progress").insert({
    user_id: userId,
    workout_id: workoutId,
  });
  if (error) {
    throw error;
  }
  return data;
};

const removeWorkout = async (userId: string, workoutId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("workout_progress")
    .delete()
    .eq("user_id", userId)
    .eq("workout_id", workoutId);
  if (error) {
    throw error;
  }
  return data;
};

// Get user data from Supabase
export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await getWorkouts(user!.id);
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { workoutId } = await request.json();
  const data = await addWorkout(user!.id, workoutId);
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { workoutId } = await request.json();
  const data = await removeWorkout(user!.id, workoutId);
  return NextResponse.json(data);
}
