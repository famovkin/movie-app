import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const MovieScreen = () => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <Text>{route.params.name}</Text>
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
