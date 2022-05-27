import React from "react";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Paragraph,
  Title,
} from "react-native-paper";
import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import { spacing } from "../../../utils/sizes";

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
    name = "Eat & Drink Indian Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "Dubai, UAE",
    isOpenNow = "true",
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

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
        <Card elevation={5} style={styles.card}>
          <Card.Cover
            key={name}
            style={styles.cardCover}
            source={{ uri: photos[0] }}
          />
          <Card.Content>
            <Title>{name}</Title>
            <Paragraph>{address}</Paragraph>
          </Card.Content>
        </Card>
      </>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    overflow: "hidden",
  },
  cardCover: {
    backgroundColor: colors.white,
    padding: spacing.md,
  },
  cardTitle: {
    backgroundColor: "rgba(150,50,0,0.1)",
  },
});
