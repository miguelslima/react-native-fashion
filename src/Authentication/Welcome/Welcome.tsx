import React from "react";
import { Box, useTheme, Text, Button } from "../../components";
import { Image, Dimensions } from "react-native";
import { Routes, StackNavigationProps } from "../../components/Navigation";
// import { AuthNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../assets/images/5.png"),
  width: 434,
  height: 575,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  const BORDER_RADIUS = theme.borderRadii.xl;

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="background2"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={{
            width: width - BORDER_RADIUS,
            height: ((width - BORDER_RADIUS) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="background2"
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
        />
        <Box
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="space-around"
          alignItems="center"
          padding="xl"
          flex={1}
        >
          <Text textAlign="center" variant="title2">
            Lets's get started
          </Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="default"
            label="Join us it's free"
            onPress={() => {}}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => {}}
          />
          {/*
          <LinkButton
            onPress={() => navigation.navigate('ForgotPassword')}
            label='Forgot password?'
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
