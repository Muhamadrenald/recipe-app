import { COLOR } from "@/constanst/color";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
}

const TagItem: FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{name}</Text>
      </View>
    </View>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badge: {
    backgroundColor: COLOR.inactive,
    borderRadius: 25,
    padding: 15,
    elevation: 5,
  },
  badgeText: {
    color: "black",
  },
});
