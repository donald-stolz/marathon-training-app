import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { TrainingPlanClient } from "@/components/training-plan-client"

export default async function Home() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: progressData } = await supabase.from("workout_progress").select("workout_id").eq("user_id", user.id)

  const completedWorkoutIds = new Set(progressData?.map((p) => p.workout_id) || [])

  return <TrainingPlanClient userId={user.id} initialCompletedWorkouts={completedWorkoutIds} />
}
