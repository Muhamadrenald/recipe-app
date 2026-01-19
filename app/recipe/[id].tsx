import Header from "@/components/Header";
import { COLOR } from "@/constanst/color";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState<Record<string, any>>({});
  const getRecipe = async () => {
    const { data } = await axios.get(`https://dummyjson.com/recipe/${id}`);

    setRecipe(data);
  };

  useEffect(() => {
    getRecipe();
  }, [id]);

  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header btnBack={true} />
      <ScrollView>
        {/* Image */}
        <View style={styles.container}>
          <View style={styles.card}>
            <Image style={styles.imageFull} source={{ uri: recipe.image }} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{recipe.name}</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.containerContent}>
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons
                name="time"
                size={20}
                color={COLOR.active}
                // style={{ marginRight: 10 }}
              />
              {/* <Text style={{ color: COLOR.active, marginBottom: 10 }}>
                Cook Time: {recipe.cookTimeMinutes} minutes
              </Text> */}
              <Text style={styles.statValue}>{recipe.cookTimeMinutes}</Text>
              <Text style={styles.statLabel}>Cook Time (minutes)</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons
                name="time"
                size={20}
                color={COLOR.active}
                // style={{ marginRight: 10 }}
              />
              <Text style={styles.statValue}>{recipe.prepTimeMinutes}</Text>
              <Text style={styles.statLabel}>Prep Time (minutes)</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons
                name="people"
                size={20}
                color={COLOR.active}
                // style={{ marginRight: 10 }}
              />
              <Text style={styles.statValue}>{recipe.servings}</Text>
              <Text style={styles.statLabel}>Servings</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="bar-chart" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.difficulty}</Text>
              <Text style={styles.statLabel}>Difficulty</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="earth" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.cuisine}</Text>
              <Text style={styles.statLabel}>Cuisine</Text>
            </View>
          </View>

          {/* Ingredients */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="list" size={24} color={COLOR.secondary} />
              <Text style={styles.titleSection}>Ingredients</Text>
            </View>
            <View style={styles.ingredientsGrid}>
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient: any, index: number) => (
                  <View key={index} style={styles.ingredientsCard}>
                    <View style={styles.ingredientsNumber}>
                      <Text style={styles.ingredientsText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.ingredientsText}>{ingredient}</Text>
                  </View>
                ))}
            </View>
          </View>

          {/* Instructions */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="list" size={24} color={COLOR.secondary} />
              <Text style={styles.titleSection}>Instructions</Text>
            </View>
            <View style={styles.ingredientsGrid}>
              {recipe.instructions &&
                recipe.instructions.map((instruction: any, index: number) => (
                  <View key={index} style={styles.ingredientsCard}>
                    <View style={styles.ingredientsNumber}>
                      <Text style={styles.ingredientsText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.ingredientsText}>{instruction}</Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailRecipe;

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
  containerContent: {
    // flex: 1,
    marginHorizontal: 20,
    backgroundColor: COLOR.background,
    borderRadius: 30,
    marginTop: -30,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  statsContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLOR.active,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 10,
    color: COLOR.secondary,
    textAlign: "center",
    fontWeight: "600",
  },
  sectionContainer: {
    // marginTop: 20,
    marginBottom: 30,
  },
  sectionTitleRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  titleSection: {
    fontSize: 20,
    fontWeight: "800",
    color: COLOR.secondary,
    letterSpacing: 5,
  },
  ingredientsGrid: {
    gap: 12,
  },
  ingredientsCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.backgroundLight,
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
  ingredientsNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  ingredientsText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
});
