import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { SearchMerchant } from "../../../components/searchMerchant";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const RestaurantSafeAreaview = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

const SearchContainerView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: 0;
`;

const ListContainerView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

export const RestaurantScreen = () => {
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    console.log(`Search for ` + searchText);

    return () => {};
  }, [searchText]);

  return (
    <RestaurantSafeAreaview>
      <SearchContainerView>
        <SearchMerchant setSearchText={setSearchText}></SearchMerchant>
      </SearchContainerView>
      <ListContainerView>
        <RestaurantInfoCard />
      </ListContainerView>
    </RestaurantSafeAreaview>
  );
};
