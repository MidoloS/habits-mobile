export enum HabitName {
  WALK,
  EAT,
  TIDY,
}

export type Habit = {
  name: HabitName;
  createdAt: Date;
  updatedAt: Date;
  isPro: boolean;
  minutes: number;
  img: string;
};

export type User = {
  name: string;
  email: string;
  isPro: boolean;
};

export type Subscriptions = {
  userEmail: string;
  habitName: typeof HabitName;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
  streak: number;
};
