import { COLOR } from "@/constanst/color";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  btnBack?: boolean;
}

const Header: FC<Props> = ({ btnBack = false }) => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      {btnBack && (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLOR.primary} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>Recipe App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    padding: 16,
  },
  title: {
    fontSize: 31,
    fontWeight: "800",
    color: COLOR.secondary,
    letterSpacing: 5,
  },
});
