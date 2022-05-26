import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar as statusBar,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { SearchBar } from "./src/components/searchBar";
import { colors } from "./src/utils/colors";

import { fontSizes, spacing } from "./src/utils/sizes";

const testCategory = [
  {
    name: "Food & Drinks",
    image: "image1",
  },
  {
    name: "Beauty & Fitness",
    image: "image2",
  },
  {
    name: "Attraction & Leisure",
    image: "image3",
  },
  {
    name: "Attraction & Leisure",
    image: "image3",
  },
  {
    name: "Attraction & Leisure",
    image: "image3",
  },
];

const testOffer = [
  {
    name: "Offer 1",
    image: "image1",
  },
  {
    name: "Offer 2",
    image: "image2",
  },
  {
    name: "Offer 3",
    image: "image3",
  },
  {
    name: "Offer 4",
    image: "image3",
  },
  {
    name: "Offer 5",
    image: "image1",
  },
  {
    name: "Offer 6",
    image: "image2",
  },
  {
    name: "Offer 7",
    image: "image3",
  },
  {
    name: "Offer 8",
    image: "image3",
  },
];

const testBanner = [
  {
    image: "Banner 1",
  },
  {
    image: "Banner 2",
  },
  {
    image: "Banner 3",
  },
];

export default function App() {
  const renderCategory = ({ item }) => (
    <View style={styles.categoryItems}>
      <View style={{ height: 120, backgroundColor: "#80c6ff" }}></View>
      <View
        style={{ alignItems: "center", justifyContent: "center", flexGrow: 1 }}
      >
        <Text style={{ textAlign: "center" }}>{item.name}</Text>
      </View>
    </View>
  );

  const renderOffer = ({ item }) => (
    <View style={styles.offerItems}>
      <View style={{ height: 81, backgroundColor: "#80c6ff" }}></View>
      <View
        style={{ alignItems: "center", justifyContent: "center", flexGrow: 1 }}
      >
        <Text style={{ textAlign: "center" }}>{item.name}</Text>
      </View>
    </View>
  );

  const renderBanner = ({ item }) => (
    <View style={styles.mainBanner}>
      <Text>{item.image}</Text>
    </View>
  );

  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.searchContainer}>
    //     <Text>search</Text>
    //   </View>
    //   <View style={styles.listContainer}>
    //     <Text>list</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    /* <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <SearchBar borderRadius={10}></SearchBar>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView> */

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <View>
          <Text style={styles.greetings}>Hi, Miguel Paday</Text>
        </View>
        <View style={styles.headerIcons}>
          <Image
            style={styles.footerIcons}
            source={require("./assets/headphone.png")}
          ></Image>
          <Image
            style={styles.footerIcons}
            source={require("./assets/smiley.png")}
          ></Image>
          <Image
            style={styles.footerIcons}
            source={require("./assets/heart.png")}
          ></Image>
          <Image
            style={styles.footerIcons}
            source={require("./assets/bell.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.screenContainer}>
        <ScrollView
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.searchContainer}>
            <SearchBar borderRadius={10}></SearchBar>
          </View>
          <View>
            <FlatList
              contentContainerStyle={{
                padding: spacing.md,
                paddingTop: 0,
                paddingBottom: 0,
              }}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{ width: spacing.md }} />
              )}
              horizontal
              data={testBanner}
              renderItem={renderBanner}
            />
          </View>

          <View style={styles.categories}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoryItemsContainer}>
              <FlatList
                contentContainerStyle={{
                  padding: spacing.md,
                  paddingTop: 0,
                  paddingBottom: 15,
                }}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      width: spacing.md,
                      backgroundColor: "transparent",
                    }}
                  />
                )}
                horizontal
                data={testCategory}
                renderItem={renderCategory}
              />
            </View>
          </View>

          <View style={[styles.categories, { marginTop: 0 }]}>
            <Text style={styles.categoriesTitle}>Hot Offers </Text>
            <View
              style={[
                styles.categoryItemsContainer,
                {
                  paddingTop: 0,
                },
              ]}
            >
              <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                contentContainerStyle={{
                  padding: spacing.md,
                  paddingTop: 0,
                  paddingBottom: spacing.md + 10,
                }}
                showsHorizontalScrollIndicator={false}
                numColumns={4}
                scrollEnabled={false}
                data={testOffer}
                renderItem={renderOffer}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.footerIcons}
            source={require("./assets/home.png")}
          ></Image>
          <Text style={styles.footerMenuText}>Home</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={[styles.footerIcons, { width: 40 }]}
            source={require("./assets/travel.png")}
          ></Image>

          <Text style={styles.footerMenuText}>Travel</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={[styles.footerIcons, { width: 50 }]}
            source={require("./assets/delivery.png")}
          ></Image>

          <Text style={styles.footerMenuText}>Delivery</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.footerIcons}
            source={require("./assets/soleil.png")}
          ></Image>

          <Text style={styles.footerMenuText}>Soleil</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.footerIcons}
            source={require("./assets/profile.png")}
          ></Image>

          <Text style={styles.footerMenuText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: statusBar.currentHeight,
  },
  screenContainer: {
    flex: 1,
    padding: 0,
  },
  searchContainer: {
    padding: spacing.md,
    paddingBottom: 0,
    paddingTop: 0,
  },
  listContainer: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: "#0259ff",
    marginBottom: spacing.xxxl,
    borderColor: "black",
    borderWidth: 1,
  },
  mainBanner: {
    backgroundColor: colors.lightGrey,
    marginTop: spacing.md,
    padding: spacing.lg,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: Dimensions.get("window").width - spacing.md * 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.md,
    paddingBottom: spacing.sm,
  },
  headerIcons: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greetings: {
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  categories: {
    marginTop: spacing.md,
  },
  categoriesTitle: {
    fontWeight: "bold",
    fontSize: fontSizes.lg,
    paddingLeft: spacing.md,
  },
  categoryItems: {
    width: 114,
    height: 170,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    overflow: "hidden",
    shadowOffset: { width: 1, height: -1 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 9,
  },
  offerItems: {
    width: 81,
    height: 120,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: spacing.md,
    shadowOffset: { width: 1, height: -1 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 9,
  },
  categoryItemsContainer: {
    paddingTop: spacing.md,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: spacing.sm,
    paddingLeft: 0,
    paddingRight: 0,
  },
  footerIcons: {
    width: 30,
    height: 30,
    resizeMode: "center",
  },
  footerMenuText: {
    fontSize: fontSizes.sm,
  },
});
