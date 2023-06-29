import { Stack } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return <Stack />;
}
