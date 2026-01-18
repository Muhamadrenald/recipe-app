import { COLOR } from "@/constanst/color";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayouts = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR.active,
        tabBarInactiveTintColor: COLOR.inactive,
        tabBarStyle: {
          backgroundColor: COLOR.white,
          borderTopColor: COLOR.border,
          borderWidth: 1,
          paddingBottom: 0,
          paddingTop: 20,
        },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="recipe"
        options={{
          title: "Recipe",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayouts;
