import { recipeData } from "@/app/(tabs)";
import { COLOR } from "@/constanst/color";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RecipeItem: FC<recipeData> = ({ id, name, cookTimeMinutes, image }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/recipe/${id}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cookTime}>{cookTimeMinutes} Minutes</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeItem;

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 20,
    // elevation: 15,
  },
  imageContainer: {
    height: 140,
  },
  container: {
    width: cardWidth,
    backgroundColor: COLOR.active,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 4,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLOR.white,
    marginBottom: 8,
    lineHeight: 20,
  },
  cookTime: {
    fontSize: 14,
    color: COLOR.white,
  },
});
