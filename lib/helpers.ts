import { Habit } from "./types";

export const getHabits: () => Promise<Habit[]> = async () => {
  const req = await fetch("https://habits-fawn.vercel.app/api/habits");
  const habits = await req.json();
  return habits;
};
