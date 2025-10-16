export interface Workout {
  day: string
  type: string
  description: string
}

export interface Week {
  week: number
  focus: string
  workouts: Workout[]
}

export const trainingPlan: Week[] = [
  {
    week: 1,
    focus: "Base Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 4M (3x400m)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Thursday",
        type: "Tempo (Threshold)",
        description: "Tempo: 5M (2M @ Tempo)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "6 Miles"
      }
    ]
  },
  {
    week: 2,
    focus: "Base Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 5M (5x400m)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Thursday",
        type: "Tempo (Threshold)",
        description: "Tempo: 6M (3M @ Tempo)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "8 Miles"
      }
    ]
  },
  {
    week: 3,
    focus: "Base Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 5M (4x800m)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Thursday",
        type: "Tempo (Threshold)",
        description: "Tempo: 7M (3M @ Tempo)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "10 Miles"
      }
    ]
  },
  {
    week: 4,
    focus: "Recovery Week",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 3M + Strides"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "7 Miles"
      }
    ]
  },
  {
    week: 5,
    focus: "Build Phase I",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 6M (4x1200m)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 7M (3M @ MP)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "12 Miles"
      }
    ]
  },
  {
    week: 6,
    focus: "Build Phase I",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 7M (6x800m)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 5M"
      },
      {
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 8M (4M @ MP)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 5M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "14 Miles"
      }
    ]
  },
  {
    week: 7,
    focus: "Build Phase I",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 7M (5x1 Mile)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 5M"
      },
      {
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 9M (4M @ MP)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 5M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "16 Miles"
      }
    ]
  },
  {
    week: 8,
    focus: "Recovery Week",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 5M"
      },
      {
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 4M + Strides"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "10 Miles"
      }
    ]
  },
  {
    week: 9,
    focus: "Peak Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 8M (8x800m)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 6M"
      },
      {
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 10M (6M @ MP)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "18 Miles"
      }
    ]
  },
  {
    week: 10,
    focus: "Peak Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 8M (3x2 Miles)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 6M"
      },
      {
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 11M (7M @ MP)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "20 Miles"
      }
    ]
  },
  {
    week: 11,
    focus: "Peak Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 7M (6x1 Mile)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 5M"
      },
      {
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 10M (6M @ MP)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "18 Miles"
      }
    ]
  },
  {
    week: 12,
    focus: "Recovery Week",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 3M + Strides"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "12 Miles"
      }
    ]
  },
  {
    week: 13,
    focus: "Taper Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "MP Run",
        description: "MP Run: 5M (2M @ MP)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 4M"
      },
      {
        day: "Thursday",
        type: "Speed (Intervals)",
        description: "Speed: 4M (4x400m)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "10 Miles"
      }
    ]
  },
  {
    week: 14,
    focus: "Taper Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Tuesday",
        type: "MP Run",
        description: "MP Run: 3M (1M @ MP)"
      },
      {
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 3M"
      },
      {
        day: "Thursday",
        type: "Speed (Intervals)",
        description: "Speed: 3M (3x200m)"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 2M"
      },
      {
        day: "Sunday",
        type: "Long Run",
        description: "6 Miles"
      }
    ]
  },
  {
    week: 15,
    focus: "Taper Phase",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 2M"
      },
      {
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train"
      },
      {
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 2M + Strides"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 1M"
      },
      {
        day: "Sunday",
        type: "Rest",
        description: "Rest"
      }
    ]
  },
  {
    week: 16,
    focus: "Race Week",
    workouts: [
      {
        day: "Monday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 1M"
      },
      {
        day: "Wednesday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 2M + Strides"
      },
      {
        day: "Friday",
        type: "Rest",
        description: "Rest"
      },
      {
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 1M"
      },
      {
        day: "Sunday",
        type: "MARATHON",
        description: "MARATHON"
      }
    ]
  }
]
