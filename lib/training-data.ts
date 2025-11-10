export interface Workout {
  workout_id: string;
  day: string;
  type: string;
  description: string;
}

export interface Week {
  week: number;
  focus: string;
  workouts: Workout[];
}

export const trainingPlan: Week[] = [
  {
    week: 1,
    focus: "Base Phase",
    workouts: [
      {
        workout_id: "1-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "1-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 4M (3x400m)",
      },
      {
        workout_id: "1-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "1-Thursday",
        day: "Thursday",
        type: "Tempo (Threshold)",
        description: "Tempo: 5M (2M @ Tempo)",
      },
      {
        workout_id: "1-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "1-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "1-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "6 Miles",
      },
    ],
  },
  {
    week: 2,
    focus: "Base Phase",
    workouts: [
      {
        workout_id: "2-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "2-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 5M (5x400m)",
      },
      {
        workout_id: "2-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "2-Thursday",
        day: "Thursday",
        type: "Tempo (Threshold)",
        description: "Tempo: 6M (3M @ Tempo)",
      },
      {
        workout_id: "2-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "2-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "2-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "8 Miles",
      },
    ],
  },
  {
    week: 3,
    focus: "Base Phase",
    workouts: [
      {
        workout_id: "3-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "3-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 5M (4x800m)",
      },
      {
        workout_id: "3-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "3-Thursday",
        day: "Thursday",
        type: "Tempo (Threshold)",
        description: "Tempo: 7M (3M @ Tempo)",
      },
      {
        workout_id: "3-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "3-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "3-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "10 Miles",
      },
    ],
  },
  {
    week: 4,
    focus: "Recovery Week",
    workouts: [
      {
        workout_id: "4-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "4-Tuesday",
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "4-Wednesday",
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "4-Thursday",
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 3M + Strides",
      },
      {
        workout_id: "4-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "4-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "4-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "7 Miles",
      },
    ],
  },
  {
    week: 5,
    focus: "Build Phase I",
    workouts: [
      {
        workout_id: "5-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "5-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 6M (4x1200m)",
      },
      {
        workout_id: "5-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "5-Thursday",
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 7M (3M @ MP)",
      },
      {
        workout_id: "5-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "5-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "5-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "12 Miles",
      },
    ],
  },
  {
    week: 6,
    focus: "Build Phase I",
    workouts: [
      {
        workout_id: "6-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "6-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 7M (6x800m)",
      },
      {
        workout_id: "6-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 5M",
      },
      {
        workout_id: "6-Thursday",
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 8M (4M @ MP)",
      },
      {
        workout_id: "6-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "6-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 5M",
      },
      {
        workout_id: "6-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "14 Miles",
      },
    ],
  },
  {
    week: 7,
    focus: "Build Phase I",
    workouts: [
      {
        workout_id: "7-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "7-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 7M (5x1 Mile)",
      },
      {
        workout_id: "7-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 5M",
      },
      {
        workout_id: "7-Thursday",
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 9M (4M @ MP)",
      },
      {
        workout_id: "7-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "7-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 5M",
      },
      {
        workout_id: "7-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "16 Miles",
      },
    ],
  },
  {
    week: 8,
    focus: "Recovery Week",
    workouts: [
      {
        workout_id: "8-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "8-Tuesday",
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 5M",
      },
      {
        workout_id: "8-Wednesday",
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "8-Thursday",
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 4M + Strides",
      },
      {
        workout_id: "8-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "8-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "8-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "10 Miles",
      },
    ],
  },
  {
    week: 9,
    focus: "Peak Phase",
    workouts: [
      {
        workout_id: "9-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "9-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 8M (8x800m)",
      },
      {
        workout_id: "9-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 6M",
      },
      {
        workout_id: "9-Thursday",
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 10M (6M @ MP)",
      },
      {
        workout_id: "9-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "9-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "9-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "18 Miles",
      },
    ],
  },
  {
    week: 10,
    focus: "Peak Phase",
    workouts: [
      {
        workout_id: "10-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "10-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 8M (3x2 Miles)",
      },
      {
        workout_id: "10-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 6M",
      },
      {
        workout_id: "10-Thursday",
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 11M (7M @ MP)",
      },
      {
        workout_id: "10-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "10-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "10-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "20 Miles",
      },
    ],
  },
  {
    week: 11,
    focus: "Peak Phase",
    workouts: [
      {
        workout_id: "11-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "11-Tuesday",
        day: "Tuesday",
        type: "Speed (Intervals)",
        description: "Speed: 7M (6x1 Mile)",
      },
      {
        workout_id: "11-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 5M",
      },
      {
        workout_id: "11-Thursday",
        day: "Thursday",
        type: "MP Run",
        description: "MP Run: 10M (6M @ MP)",
      },
      {
        workout_id: "11-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "11-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "11-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "18 Miles",
      },
    ],
  },
  {
    week: 12,
    focus: "Recovery Week",
    workouts: [
      {
        workout_id: "12-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "12-Tuesday",
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "12-Wednesday",
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "12-Thursday",
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 3M + Strides",
      },
      {
        workout_id: "12-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "12-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "12-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "12 Miles",
      },
    ],
  },
  {
    week: 13,
    focus: "Taper Phase",
    workouts: [
      {
        workout_id: "13-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "13-Tuesday",
        day: "Tuesday",
        type: "MP Run",
        description: "MP Run: 5M (2M @ MP)",
      },
      {
        workout_id: "13-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 4M",
      },
      {
        workout_id: "13-Thursday",
        day: "Thursday",
        type: "Speed (Intervals)",
        description: "Speed: 4M (4x400m)",
      },
      {
        workout_id: "13-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "13-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "13-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "10 Miles",
      },
    ],
  },
  {
    week: 14,
    focus: "Taper Phase",
    workouts: [
      {
        workout_id: "14-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "14-Tuesday",
        day: "Tuesday",
        type: "MP Run",
        description: "MP Run: 3M (1M @ MP)",
      },
      {
        workout_id: "14-Wednesday",
        day: "Wednesday",
        type: "Easy / Strides",
        description: "Easy 3M",
      },
      {
        workout_id: "14-Thursday",
        day: "Thursday",
        type: "Speed (Intervals)",
        description: "Speed: 3M (3x200m)",
      },
      {
        workout_id: "14-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "14-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 2M",
      },
      {
        workout_id: "14-Sunday",
        day: "Sunday",
        type: "Long Run",
        description: "6 Miles",
      },
    ],
  },
  {
    week: 15,
    focus: "Taper Phase",
    workouts: [
      {
        workout_id: "15-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "15-Tuesday",
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 2M",
      },
      {
        workout_id: "15-Wednesday",
        day: "Wednesday",
        type: "Rest",
        description: "Rest / Cross-Train",
      },
      {
        workout_id: "15-Thursday",
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 2M + Strides",
      },
      {
        workout_id: "15-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "15-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 1M",
      },
      {
        workout_id: "15-Sunday",
        day: "Sunday",
        type: "Rest",
        description: "Rest",
      },
    ],
  },
  {
    week: 16,
    focus: "Race Week",
    workouts: [
      {
        workout_id: "16-Monday",
        day: "Monday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "16-Tuesday",
        day: "Tuesday",
        type: "Easy / Strides",
        description: "Easy 1M",
      },
      {
        workout_id: "16-Wednesday",
        day: "Wednesday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "16-Thursday",
        day: "Thursday",
        type: "Easy / Strides",
        description: "Easy 2M + Strides",
      },
      {
        workout_id: "16-Friday",
        day: "Friday",
        type: "Rest",
        description: "Rest",
      },
      {
        workout_id: "16-Saturday",
        day: "Saturday",
        type: "Easy / Strides",
        description: "Easy 1M",
      },
      {
        workout_id: "16-Sunday",
        day: "Sunday",
        type: "MARATHON",
        description: "MARATHON",
      },
    ],
  },
];
