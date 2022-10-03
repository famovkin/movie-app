import { Text, SafeAreaView } from "react-native";
import React from "react";

import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f0f0f0", flex: 1 }}>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
