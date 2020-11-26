import * as React from "react";
import {
  assets as authenticationAssets,
  AuthenticationNavigation,
} from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Themes";

const assets = [...authenticationAssets];
const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigation />
      </LoadAssets>
    </ThemeProvider>
  );
}
