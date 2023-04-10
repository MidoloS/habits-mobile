import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Habit } from "../../lib/types";
import { getHabits } from "../../lib/helpers";
import { HabitCard } from "../../etc/HabitCard";

const img =
  "https://mabfjyjbggqdwqtjdwip.supabase.co/storage/v1/object/sign/images/EAT.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvRUFULnBuZyIsImlhdCI6MTY4MTA4OTI5NywiZXhwIjoxNzEyNjI1Mjk3fQ.FnbvGrS9IR4CdEO9eW5XREc4bhZq-R_Rot-xkwf-1Y0&t=2023-04-10T01%3A15%3A15.578Z";

export function App() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text>Hola mundo</Text>
    </View>
  );
}
