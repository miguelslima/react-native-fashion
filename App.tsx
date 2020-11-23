import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadAssets } from "./src/compnents";

import { Onboarding } from "./src/Authentication";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigation />
    </LoadAssets>
  );
}
