import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import Button from "../../compnents/Button";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.71 * height;

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Slide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        onPress={onPress}
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 24,
    color: "#0C0D34",
    lineHeight: 30,
    textAlign: "center",
  },
  description: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 30,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginTop: 40,
  },
});

export default Slide;
