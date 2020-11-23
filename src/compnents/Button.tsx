import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2CB980" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "Roboto-Medium",
    fontSize: 15,
    textAlign: "center",
  },
});

export default Button;
