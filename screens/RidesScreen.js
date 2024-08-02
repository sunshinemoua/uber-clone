import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavFavorites from "../components/NavFavorites";
import SearchDrawer from "../components/SearchDrawer";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Img from "../assets/test.jpg";
import OpenURL from "../components/OpenURL";
import uuid from "react-native-uuid";

const suggestionsData = [
  {
    title: "Ride",
    icon: "car",
    url: "https://www.uber.com/global/en/sign-in/",
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

const saveEverydayData = [
  {
    title: "Add a stop or 5",
    subtitle: "Pick up something along the way",
    url: "https://www.uber.com/global/en/sign-in/",
    isXL: true,
  },
  {
    title: "Go on 2 wheels",
    subtitle: "Take an electronic bike or scooter",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    isXL: true,
  },
];

export const Tile = ({ item }) => (
  <TouchableOpacity
    style={
      !!item?.isXL
        ? styles.XLShortcuts
        : !!item?.isBig
        ? styles.bigShortcuts
        : !!item?.isMedium
        ? styles.mediumShortcuts
        : styles.shortcuts
    }
  >
    {item.icon ? (
      <OpenURL key={uuid.v4()} url={item.url}>
        <Icon name={item.icon} type="ionicon" color={item.color} />
        <Text style={tw`pt-2 text-xs`}> {item.title}</Text>
      </OpenURL>
    ) : (
      <OpenURL key={uuid.v4()} url={item.url}>
        <Image style={styles.img} source={require("../assets/test.jpg")} />
        <View style={tw`flex-row items-center justify-start`}>
          <Text style={tw`pr-1 text-sm font-semibold`}> {item.title}</Text>
          <Icon name="arrow-forward-outline" type="ionicon" size={16} />
        </View>
        <Text style={tw`text-xs text-gray-500`}> {item.subtitle}</Text>
      </OpenURL>
    )}
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={tw`font-bold text-lg`}>Suggestions</Text>
        <Pressable onPress={() => navigation.navigate("Services")}>
          <Text style={{ fontSize: 14 }}> See All</Text>
        </Pressable>
      </View>

      <View style={styles.shortcutsWrapper}>
        {suggestionsData.map((item) => (
          <Tile key={item.title} item={item} />
        ))}
      </View>

      {/* Save everyday */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 18,
        }}
      >
        <Text style={tw`font-bold text-lg mb-2`}>Save everyday</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollView}
      >
        {saveEverydayData.map((item) => (
          <Tile key={item.title} item={item} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default RidesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  horizontalScrollView: {
    flexDirection: "row",
    alignItems: "center",
  },
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
  img: {
    height: 115,
    width: "100%",
    borderRadius: 8,
    marginBottom: 5,
  },
  XLShortcuts: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: 10,
    width: 215,
    height: 175,
    marginRight: 12,
  },
  bigShortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    width: 175,
    height: 100,
  },
  mediumShortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});
