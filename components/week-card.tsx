import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import type { Week } from "@/lib/training-data"

interface WeekCardProps {
  week: Week
  completedWorkouts: Set<string>
  onToggleWorkout: (workoutId: string) => void
}

export function WeekCard({ week, completedWorkouts, onToggleWorkout }: WeekCardProps) {
  const completedInWeek = week.workouts.filter((w) => completedWorkouts.has(`${week.week}-${w.day}`)).length
  const isWeekComplete = completedInWeek === week.workouts.length

  return (
    <Card className={`p-6 transition-all hover:shadow-lg ${isWeekComplete ? "border-primary border-2" : ""}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">Week {week.week}</h3>
            <p className="text-sm text-muted-foreground mt-1">{week.focus}</p>
          </div>
          {isWeekComplete && <Badge className="bg-primary text-primary-foreground">Complete</Badge>}
        </div>

        <div className="space-y-3">
          {week.workouts.map((workout) => {
            const workoutId = `${week.week}-${workout.day}`
            const isCompleted = completedWorkouts.has(workoutId)

            return (
              <div
                key={workout.day}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Checkbox
                  id={workoutId}
                  checked={isCompleted}
                  onCheckedChange={() => onToggleWorkout(workoutId)}
                  className="mt-1"
                />
                <label htmlFor={workoutId} className="flex-1 cursor-pointer space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{workout.day}</span>
                    <Badge variant="outline" className="text-xs">
                      {workout.type}
                    </Badge>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${isCompleted ? "line-through text-muted-foreground" : "text-foreground"}`}
                  >
                    {workout.description}
                  </p>
                </label>
              </div>
            )
          })}
        </div>

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
  )
}
