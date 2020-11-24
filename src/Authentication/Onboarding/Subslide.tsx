import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { Button, Text } from "../../components";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.71 * height;

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Sublide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    textAlign: "center",
    marginTop: 12,
  },
  description: {
    marginBottom: 40,
    lineHeight: 24,

    textAlign: "center",
  },
});

export default Sublide;
