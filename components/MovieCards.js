import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";

import movies from "../data/movies.js";
import Header from "./Header.js";
import { useNavigation } from "@react-navigation/native";

const MovieCards = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={Header}
        numColumns={2}
        data={movies}
        renderItem={({ item }) => (
          <Pressable style={{ margin: 10, marginLeft: 20 }}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 6,
                marginBottom: 10,
              }}
              source={{
                uri: item.image,
              }}
              id={item.id}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                width: 150,
                marginBottom: 4,
              }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginBottom: 4 }}>
              {item.country}{" "}
            </Text>
            <Text style={{ marginBottom: -10 }}>{item.genre}</Text>
            {/* Сделать отдельный компонент для кнопки*/}
            <Pressable
              onPress={() => {
                navigation.navigate("Movie", {
                  name: item.name,
                });
              }}
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
                width: 70,
                alignSelf: "flex-end",
              }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 14,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Book
              </Text>
            </Pressable>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({});
