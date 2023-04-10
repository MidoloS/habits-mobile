import React, { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { HabitName } from "../lib/types";
import { TITLES } from "../lib/constants";

type Props = {
  src: string;
  title: HabitName;
  suffix?: React.ReactNode;
  minutes: number;
};

export const HabitCard: FC<Props> = (props) => {
  const { src, title, suffix, minutes = 5 } = props;
  return (
    <TouchableOpacity style={styles.rounded}>
      <ImageBackground
        style={styles.container}
        source={{ uri: src }}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.data}>
          <View>
            {/* @ts-ignore */}
            <Text style={styles.label}>{TITLES[title]}</Text>
            <Text style={styles.value}>{minutes} min</Text>
          </View>
          <View>{suffix}</View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minWidth: 300,
    minHeight: 200,
  },
  rounded: {
    borderRadius: 10,
  },
  label: {
    color: "white",
  },
  value: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  data: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
