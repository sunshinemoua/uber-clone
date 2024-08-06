import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Tile } from "../components/Tile";
import tw from "tailwind-react-native-classnames";
import {
  goAnywhereList,
  getAnythingDeliveredList,
  getAnythingDoneList,
} from "./ServicesScreenData";

const ServicesScreen = () => {
  return (
    <>
      <Text style={styles.title}>Services</Text>
      <ScrollView>
        {/* Go anywhere */}
        <View style={styles.container}>
          <Text style={styles.header}>Go anywhere</Text>
          <View style={styles.goAnywhereWrapper}>
            {goAnywhereList.map((item) => (
              <Tile key={item.id} item={item} />
            ))}
          </View>
        </View>
        <View style={tw`mt-6 border-t border-2 border-gray-300 `} />

        {/* Get anything delivered */}
        <View style={styles.container}>
          <Text style={styles.header}>Get anything delivered</Text>
          <View style={styles.goAnywhereWrapper}>
            {getAnythingDeliveredList.map((item) => (
              <Tile key={item.id} item={item} />
            ))}
          </View>
        </View>

        <View style={tw`mt-6 border-t border-2 border-gray-300`} />

        {/* Get anything done */}
        <View style={styles.container}>
          <Text style={styles.header}>Get anything done</Text>
          <View style={styles.getAnythingDoneWrapper}>
            {getAnythingDoneList.map((item) => (
              <Tile key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 72,
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
    marginVertical: 16,
  },

  goAnywhereWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "15",
    marginTop: 8,
  },

  getAnythingDoneWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 8,
    marginBottom: 32,
  },
});
