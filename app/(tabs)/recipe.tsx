import Header from "@/components/Header";
import RecipeItem from "@/components/RecipeItem";
import TagItem from "@/components/TagItem";
import { COLOR } from "@/constanst/color";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

const RecipeScreen = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  const getRecipes = async () => {
    if (!name) {
      const { data } = await axios.get(
        "https://dummyjson.com/recipes?limit=50&select=id,name,image,cookTimeMinutes",
      );
      setRecipes(data.recipes);
    } else {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/tag/${name}`,
      );
      setRecipes(data.recipes);
    }
  };

  const getTags = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes/tags");
    setTags(data);
  };

  const handleChangeRecipe = async (name: string) => {
    setName(name);
  };

  useEffect(() => {
    getRecipes();
    getTags();
  }, [name]);

  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      {/* List Tags */}
      <View>
        <FlatList
          data={tags}
          renderItem={({ item }) => (
            <TagItem
              name={item}
              handleChangeRecipe={handleChangeRecipe}
              selectedName={name}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ gap: 8 }}
          style={{ marginHorizontal: 10 }}
        />
      </View>

      {/* List Recipes */}
      <View style={{ flex: 1, margin: 10 }}>
        <FlatList
          data={recipes}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 16 }}
          renderItem={({ item }) => (
            <RecipeItem
              id={item.id}
              name={item.name}
              cookTimeMinutes={item.cookTimeMinutes}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          // showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default RecipeScreen;
