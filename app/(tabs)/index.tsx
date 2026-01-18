import Header from "@/components/Header";
import { COLOR } from "@/constanst/color";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello World</Text>
        <Link style={{ fontSize: 20, color: "red" }} href={"/recipe"}>
          Go to Recipe
        </Link>

        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20 }}>
          List Recipe
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20,
          }}
        >
          <Link
            style={{ fontSize: 20, color: "blue", backgroundColor: "red" }}
            href={"/recipe/1"}
          >
            Recipe 1
          </Link>
          <Link
            style={{ fontSize: 20, color: "blue", backgroundColor: "lime" }}
            href={"/recipe/2"}
          >
            Go Recipe 20
          </Link>
          <Link
            style={{ fontSize: 20, color: "blue", backgroundColor: "green" }}
            href={"/recipe/3"}
          >
            Go to Recipe 300
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
