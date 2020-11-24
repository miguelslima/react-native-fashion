import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Themes";
import { Onboarding, Welcome } from "./src/Authentication";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigation />
      </LoadAssets>
    </ThemeProvider>
  );
}
