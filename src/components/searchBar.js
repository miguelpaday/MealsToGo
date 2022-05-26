import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes";

export const SearchBar = ({ style = {}, borderRadius = 0 }) => {
  return (
    <>
      <View style={styles2.container}>
        <TextInput
          style={[
            styles(borderRadius).searchBar,
            style,
            { borderBottomWidth: 0 },
          ]}
          mode={"outlined"}
          label={"Search"}
          outlineColor="transparent"
          placeholderTextColor="transparent"
          activeOutlineColor={colors.dark}
          left={<TextInput.Icon name="store-search" />}
          theme={{
            colors: {
              background: colors.lightGrey,
            },
          }}
        ></TextInput>

        <TouchableOpacity
          style={styles2.button}
          onPress={() => console.log("Pressed")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: fontSizes.lg,
                marginRight: 5,
              }}
            >
              Dubai
            </Text>
            <Text>▼</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = (borderRadius) => ({
  searchBar: {
    flex: 0.8,
    fontSize: fontSizes.lg,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    height: 70,
  },
  button: {
    marginLeft: 5,
    alignItems: "center",
    flex: 0.3,
    justifyContent: "center",
    height: 57,
    color: colors.dark,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
  },
});
