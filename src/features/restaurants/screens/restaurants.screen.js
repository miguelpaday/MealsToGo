import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { SearchMerchant } from "../../../components/searchMerchant";

import { colors } from "../../../utils/colors";
import { spacing } from "../../../utils/sizes";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => {
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    console.log(`Search for ` + searchText);

    return () => {};
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchMerchant setSearchText={setSearchText}></SearchMerchant>
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
  },
  searchContainer: {
    padding: spacing.md,
  },
  listContainer: {
    padding: spacing.md,
    flexGrow: 1,
  },
});
