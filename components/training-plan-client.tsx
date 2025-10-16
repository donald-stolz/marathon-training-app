"use client"

import { useState, useTransition } from "react"
import { TrainingPlanHeader } from "@/components/training-plan-header"
import { WeekCard } from "@/components/week-card"
import { ProgressStats } from "@/components/progress-stats"
import { trainingPlan } from "@/lib/training-data"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

interface TrainingPlanClientProps {
  userId: string
  initialCompletedWorkouts: Set<string>
}

export function TrainingPlanClient({ userId, initialCompletedWorkouts }: TrainingPlanClientProps) {
  const [completedWorkouts, setCompletedWorkouts] = useState<Set<string>>(initialCompletedWorkouts)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const supabase = createClient()

  const toggleWorkout = async (workoutId: string) => {
    const isCompleted = completedWorkouts.has(workoutId)

    // Optimistic update
    setCompletedWorkouts((prev) => {
      const newSet = new Set(prev)
      if (isCompleted) {
        newSet.delete(workoutId)
      } else {
        newSet.add(workoutId)
      }
      return newSet
    })

    // Update database
    try {
      if (isCompleted) {
        await supabase.from("workout_progress").delete().eq("workout_id", workoutId).eq("user_id", userId)
      } else {
        await supabase.from("workout_progress").insert({
          user_id: userId,
          workout_id: workoutId,
          completed_at: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error("Error updating workout progress:", error)
      // Revert optimistic update on error
      setCompletedWorkouts((prev) => {
        const newSet = new Set(prev)
        if (isCompleted) {
          newSet.add(workoutId)
        } else {
          newSet.delete(workoutId)
        }
        return newSet
      })
    }
  }

  const handleSignOut = async () => {
    startTransition(async () => {
      await supabase.auth.signOut()
      router.push("/auth/login")
      router.refresh()
    })
  }

  const totalWorkouts = trainingPlan.reduce((acc, week) => acc + week.workouts.length, 0)
  const totalWeeks = trainingPlan.length
  const completedCount = completedWorkouts.size
  const progressPercentage = Math.round((completedCount / totalWorkouts) * 100)

  return (
    <main className="min-h-screen bg-background">
      <TrainingPlanHeader totalWeeks={totalWeeks} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" onClick={handleSignOut} disabled={isPending}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </Button>
        </div>

        <ProgressStats
          completedCount={completedCount}
          totalWorkouts={totalWorkouts}
          progressPercentage={progressPercentage}
        />

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">{totalWeeks}-Week Training Plan</h2>

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
  )
}
