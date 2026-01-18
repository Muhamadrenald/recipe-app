import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Detail Recipe id: {id}
      </Text>
    </View>
  );
};

export default DetailRecipe;
