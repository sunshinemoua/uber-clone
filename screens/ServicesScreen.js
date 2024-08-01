import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Tile } from "./RidesScreen";
import tw from "tailwind-react-native-classnames";

const goAnywhereList = [
  {
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
    isBig: true,
  },
  {
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
    isBig: true,
  },
  {
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
    isMedium: true,
  },
  {
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
    isMedium: true,
  },
  {
    title: "Group Ride",
    icon: "people",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "black",
    isMedium: true,
  },
];

const getAnythingDeliveredList = [
  {
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
  },
  {
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
  },
  {
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
  },
  {
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
  },
  {
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
  },
  {
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
  },
  {
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
  },
  {
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
  },
  {
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
  },
  {
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
  },
  {
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
  },
  {
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
  },
];

const getAnythingDoneList = [
  {
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
    isBig: true,
  },
  {
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
    isBig: true,
  },
];

const ServicesScreen = () => {
  return (
    <>
      <Text style={styles.title}>Services</Text>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Go anywhere</Text>
        <View style={styles.goAnywhereWrapper}>
          {goAnywhereList.map((item) => (
            <Tile key={item.title} item={item} />
          ))}
        </View>

        <View style={tw`mt-6 border-t border-2 border-gray-300 `} />

        <Text style={styles.header}>Get anything delivered</Text>
        <View style={styles.goAnywhereWrapper}>
          {getAnythingDeliveredList.map((item) => (
            <Tile key={item.title} item={item} />
          ))}
        </View>

        <View style={tw`mt-6 border-t border-2 border-gray-300 `} />

        <Text style={styles.header}>Get anything done</Text>
        <View style={styles.getAnythingDoneWrapper}>
          {getAnythingDoneList.map((item) => (
            <Tile key={item.title} item={item} />
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
