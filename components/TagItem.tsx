import { COLOR } from "@/constanst/color";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  handleChangeRecipe: (name: string) => void;
  selectedName: string;
}

const TagItem: FC<Props> = ({ name, handleChangeRecipe, selectedName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleChangeRecipe(name)}>
        <View
          style={[
            name === selectedName ? styles.badgeActive : styles.badgeDeactive,
          ]}
        >
          <Text style={styles.badgeText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badgeActive: {
    backgroundColor: COLOR.active,
    borderRadius: 25,
    padding: 15,
    elevation: 5,
  },
  badgeDeactive: {
    backgroundColor: COLOR.inactive,
    borderRadius: 25,
    padding: 15,
    elevation: 5,
  },
  badgeText: {
    color: "black",
  },
});
