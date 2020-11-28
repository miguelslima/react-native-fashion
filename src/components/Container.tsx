import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet, StatusBar } from "react-native";
import { Box, useTheme } from "./Themes";

export const assets = [require("./assets/patterns/1.png")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="background">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.51}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.51,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius="z"
          backgroundColor="background"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box height={150} backgroundColor="secondary">

      </Box>
    </Box>
  );
};

export default Container;
