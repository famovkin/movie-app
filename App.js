import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator.js";

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
