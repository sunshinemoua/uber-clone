import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavFavorites from "../components/NavFavorites";
import SearchDrawer from "../components/SearchDrawer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const shortcutsData = [
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

export const Tile = ({ item }) => (
  <TouchableOpacity
    style={
      !!item?.isBig
        ? styles.bigShortcuts
        : !!item?.isMedium
        ? styles.mediumShortcuts
        : styles.shortcuts
    }
  >
    <Icon name={item.icon} type="ionicon" color={item.color} />
    <Text style={tw`pt-2 text-xs`}> {item.title}</Text>
  </TouchableOpacity>
);

const RidesScreen = () => {
  const navigation = useNavigation();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    navigation.navigate("MapScreen");
    setIsBottomSheetOpen(true);
  };

  return (
    <View style={tw`p-5`}>
      <TouchableOpacity
        onPress={() => {
          handleOpenBottomSheet();
        }}
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          borderColor: "#86827e",
          backgroundColor: "#cccccc",
          paddingLeft: 24,
          paddingVertical: 12,
          borderRadius: 50,
        }}
      >
        <Icon name="search-outline" type="ionicon" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#434343",
            paddingLeft: 12,
          }}
        >
          Where to?
        </Text>
      </TouchableOpacity>
      {isBottomSheetOpen && (
        <SearchDrawer
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          isBottomSheetOpen={isBottomSheetOpen}
        />
      )}
      <NavFavorites />

      {/* Suggestions */}
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Suggestions</Text>
          <Pressable onPress={() => navigation.navigate("ServicesScreen")}>
            <Text style={{ fontSize: 14 }}> See All</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.shortcutsWrapper}>
        {shortcutsData.map((item) => (
          <Tile key={item.title} item={item} />
        ))}
      </View>
    </View>
  );
};

export default RidesScreen;

const styles = StyleSheet.create({
  shortcutsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  shortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    width: 78,
    height: 64,
    borderRadius: 10,
  },
  bigShortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    width: 78,
    height: 64,
    borderRadius: 10,
    width: 175,
    height: 100,
  },
  mediumShortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    width: 78,
    height: 64,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});
