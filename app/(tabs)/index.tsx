import Header from "@/components/Header";
import RecipeItem from "@/components/RecipeItem";
import { COLOR } from "@/constanst/color";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export interface recipeData {
  id: number;
  name: string;
  cookTimeMinutes: number;
  image: string;
  // ingredients: string[];
  // instructions: string[];
}

const HomeScreen = () => {
  // Random 1 - 30
  const random = Math.floor(Math.random() * 30) + 1;

  // State
  const [randomRecipe, setRandomRecipe] = useState<recipeData[]>([]);
  const [recipes, setRecipes] = useState<Record<string, any>>({});

  const getRecipes = async () => {
    const recipe = await axios.get(`https://dummyjson.com/recipes/${random}`);
    setRecipes(recipe.data);
  };

  const getRandomRecipe = async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes?limit=10&skip=${random}&select=id,name,image,cookTimeMinutes`,
    );
    setRandomRecipe(data.recipes);
  };

  useEffect(() => {
    getRecipes();
    getRandomRecipe();
  }, []);

  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.imageFull} source={{ uri: recipes.image }} />
          <View style={styles.overlay}>
            <Text style={styles.title}>{recipes.name}</Text>
            <Text
              style={{
                color: COLOR.primary,
                textShadowColor: COLOR.white,
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 10,
              }}
            >
              {recipes.cookTimeMinutes} Minutes
            </Text>
          </View>
        </View>
        <Text style={styles.randomText}>Random Recipe</Text>
        <FlatList
          data={randomRecipe}
          renderItem={({ item }) => (
            <RecipeItem
              id={item.id}
              name={item.name}
              cookTimeMinutes={item.cookTimeMinutes}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={{ gap: 8 }}
          style={{ marginTop: 10 }}
        />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageFull: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    elevation: 15,
  },
  card: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLOR.primary,
    letterSpacing: 5,
    marginBottom: 10,
    textShadowColor: COLOR.warning,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  overlay: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  randomText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLOR.primary,
    letterSpacing: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textShadowColor: COLOR.warning,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});
