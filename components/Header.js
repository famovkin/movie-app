import {
  View,
  Pressable,
  ImageBackground,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

const types = [
  {
    id: "0",
    name: "IMax",
  },
  {
    id: "1",
    name: "4DX",
  },
  {
    id: "2",
    name: "PXL",
  },
  {
    id: "3",
    name: "Gold",
  },
  {
    id: "4",
    name: "Playhouse",
  },
  {
    id: "5",
    name: "Empire",
  },
];

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170, marginBottom: 130 }}
        source={require("../assets/images/header-poster.webp")}
      >
        <Pressable
          style={{
            position: "absolute",
            height: 130,
            backgroundColor: "white",
            padding: 15,
            borderRadius: 6,
            top: 155,
            left: "5%",
            width: "80%",
          }}
        >
          <Text
            style={{
              marginBottom: 10,
              fontSize: 16,
              color: "gray",
              fontWeight: "500",
            }}
          >
            Releasing in 1 day!
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <View>
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                Beast
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "gray",
                }}
              >
                English
              </Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Book
              </Text>
            </Pressable>
          </View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Thriller, drama, adventure
          </Text>
        </Pressable>
      </ImageBackground>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {types.map((type, index) => (
            <View
              style={{
                margin: 10,
                borderColor: "#c0c0c0",
                borderWidth: 0.5,
                borderRadius: 4,
                padding: 10,
              }}
              key={type.id}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {type.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;
