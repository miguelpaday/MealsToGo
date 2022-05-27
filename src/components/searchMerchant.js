import { Searchbar } from "react-native-paper";

export const SearchMerchant = (props) => {
  return (
    <Searchbar
      style={{ elevation: 10 }}
      icon="store-search-outline"
      placeholder="Search"
      onIconPress={() => {
        console.log("Search!");
      }}
      onChangeText={(text) => {
        props.setSearchText(text);
      }}
    ></Searchbar>
  );
};
