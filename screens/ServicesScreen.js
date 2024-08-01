import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Tile } from "./RidesScreen";
import tw from "tailwind-react-native-classnames";
import uuid from "react-native-uuid";

const goAnywhereList = [
  {
    id: uuid.v4(),
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
    isBig: true,
  },
  {
    id: uuid.v4(),
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
    isBig: true,
  },
  {
    id: uuid.v4(),
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
    isMedium: true,
  },
  {
    id: uuid.v4(),
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
    isMedium: true,
  },
  {
    id: uuid.v4(),
    title: "Group Ride",
    icon: "people",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "black",
    isMedium: true,
  },
];

const getAnythingDeliveredList = [
  {
    id: uuid.v4(),
    title: "Food",
    icon: "restaurant",
    url: "https://help.uber.com",
    color: "darkorange",
  },
  {
    id: uuid.v4(),
    title: "Grocery",
    icon: "fast-food-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "darkgreen",
  },
  {
    id: uuid.v4(),
    title: "Alcohol",
    icon: "beer",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "#b5651d",
  },
  {
    id: uuid.v4(),
    title: "Convenience",
    icon: "storefront",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "black",
  },
  {
    id: uuid.v4(),
    title: "Health",
    icon: "medkit",
    url: "https://help.uber.com",
    color: "red",
  },
  {
    id: uuid.v4(),
    title: "Personal Care",
    icon: "fitness",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "#7f7fff",
  },
  {
    id: uuid.v4(),
    title: "Baby",
    icon: "sunny",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "#ffc04c",
  },
  {
    id: uuid.v4(),
    title: "Gourmet",
    icon: "wine",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "darkred",
  },
  {
    id: uuid.v4(),
    title: "Pet Supplies",
    icon: "paw",
    url: "https://help.uber.com",
    color: "brown",
  },
  {
    id: uuid.v4(),
    title: "Flowers",
    icon: "flower",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "#cc99a2",
  },
  {
    id: uuid.v4(),
    title: "Retail",
    icon: "gift",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
  },
  {
    id: uuid.v4(),
    title: "Electronics",
    icon: "watch",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "darkgray",
  },
];

const getAnythingDoneList = [
  {
    id: uuid.v4(),
    title: "Package",
    icon: "logo-dropbox",
    url: "https://help.uber.com",
    color: "#521515",
    isBig: true,
  },
  {
    id: uuid.v4(),
    title: "Store Pickup",
    icon: "storefront",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "#a52a2a",
    isBig: true,
  },
];

const ServicesScreen = () => {
  return (
    <>
      <Text style={styles.title}>Services</Text>
      <ScrollView style={styles.container}>
        {/* Go anywhere */}
        <Text style={styles.header}>Go anywhere</Text>
        <View style={styles.goAnywhereWrapper}>
          {goAnywhereList.map((item) => (
            <Tile key={item.id} item={item} />
          ))}
        </View>

        <View style={tw`mt-6 border-t border-2 border-gray-300 `} />

        {/* Get anything delivered */}
        <Text style={styles.header}>Get anything delivered</Text>
        <View style={styles.goAnywhereWrapper}>
          {getAnythingDeliveredList.map((item) => (
            <Tile key={item.id} item={item} />
          ))}
        </View>

        <View style={tw`mt-6 border-t border-2 border-gray-300 `} />

        {/* Get anything done */}
        <Text style={styles.header}>Get anything done</Text>
        <View style={styles.getAnythingDoneWrapper}>
          {getAnythingDoneList.map((item) => (
            <Tile key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ServicesScreen;
const styles = StyleSheet.create({
  title: {
    marginTop: 72,
    marginBottom: 30,
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 12,
  },
  container: {
    marginHorizontal: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },

  goAnywhereWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "15",
    marginTop: 16,
  },

  getAnythingDoneWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 32,
  },
});
