import Header from "@/components/Header";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const RecipeScreen = () => {
  return (
    <View>
      <Header />
      <Text>Halaman recipe</Text>
      <Link style={{ fontSize: 20, color: "blue" }} href={"/"}>
        Go to Home
      </Link>
    </View>
  );
};

export default RecipeScreen;
