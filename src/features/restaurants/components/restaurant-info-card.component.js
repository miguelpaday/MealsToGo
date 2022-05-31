import React from "react";
import { Avatar, Card, IconButton, Title } from "react-native-paper";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import Svg, { SvgXml } from "react-native-svg";
import star from "../../../../assets/icons/starRating";
import openRestaurant from "../../../../assets/icons/openRestaurant";
import { Spacer } from "./spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 5;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: 0;
`;

const RestaurantCardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
  margin: 0;
  padding: 0;
`;

const RestaurantAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Rating = styled(View)`
  flex-direction: row;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const SectionRight = styled(View)`
  flex-direction: column;
`;

const OpenIcon = styled(SvgXml)`
  width: 30px;
  height: 30px;
`;

const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;

const CardLeftContent = (props) => (
  <Avatar.Image
    {...props}
    source={require("../../../../assets/profileImg.jpg")}
  />
);

const CardRightContent = (props) => {
  <IconButton {...props} icon="dots-vertical" onPress={() => {}} />;
};

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "McDonald's",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "Dubai, UAE",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <>
        {/* <Card style={styles.card} mode="elevated">
        <Card.Title
          style={styles.cardTitle}
          left={CardLeftContent}
          right={CardRightContent}
          title="Kim Jong Un"
          subtitle="Supreme Leader"
        ></Card.Title>
        <Card.Content>
          <Title>No more war plz</Title>
          <Paragraph>This is a very beautiful place...</Paragraph>
        </Card.Content>
        <Card.Cover
          style={styles.cardCover}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Card.Actions
          style={{
            justifyContent: "space-around",
            borderWidth: 0,
            borderTopWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Button labelStyle={{ color: "#252526" }}>Like</Button>
          <Button labelStyle={{ color: "#252526" }}>Comment</Button>
          <Button labelStyle={{ color: "#252526" }}>Share</Button>
        </Card.Actions>
      </Card> */}
      </>
      <>
        <RestaurantCard>
          <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
          <RestaurantCardContent>
            <Section>
              <RestaurantTitle>{name}</RestaurantTitle>
              <SectionRight>
                <Icon source={{ uri: icon }} />
              </SectionRight>
            </Section>
            <Section>
              <Rating>
                {ratingArray.map((value, index) => (
                  <SvgXml key={index} width={20} height={20} xml={star} />
                ))}
              </Rating>
              <SectionRight>
                <Spacer position="top" size="medium">
                  {!isClosedTemporarily ? (
                    isOpenNow ? (
                      <OpenIcon xml={openRestaurant} />
                    ) : (
                      <Text>Temporarily Closed</Text>
                    )
                  ) : (
                    <Text>Temporarily Closed</Text>
                  )}
                </Spacer>
              </SectionRight>
            </Section>
            <RestaurantAddress>{address}</RestaurantAddress>
          </RestaurantCardContent>
        </RestaurantCard>
      </>
    </>
  );
};
