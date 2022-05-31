import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const StyledSearchBar = styled(Searchbar)`
  elevation: 5;
`;

export const SearchMerchant = (props) => {
  return (
    <StyledSearchBar
      icon="store-search-outline"
      placeholder="Search"
      onIconPress={() => {
        console.log("Search!");
      }}
      onChangeText={(text) => {
        props.setSearchText(text);
      }}
    ></StyledSearchBar>
  );
};
