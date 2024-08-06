import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavFavorites from "../components/NavFavorites";
import SearchDrawer from "../components/SearchDrawer";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import uuid from "react-native-uuid";
import {
  suggestionsData,
  FirstSaveEverydayData,
  SecondSaveEverydayData,
  PlanTripData,
  TravelEasyData,
} from "./RidesScreenData";
import { Tile } from "../components/Tile";

const RidesScreen = () => {
  const navigation = useNavigation();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    navigation.navigate("MapScreen");
    setIsBottomSheetOpen(true);
  };

  const renderHorizontalItem = ({ item }) => (
    <Tile style={{ flex: 1 }} key={uuid.v4()} item={item} />
  );

  const renderVerticalItem = ({ item }) => (
    <View>
      {item.title && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 18,
          }}
        >
          <Text style={tw`font-bold text-lg mb-2`}>{item.title}</Text>
        </View>
      )}
      <FlatList
        horizontal
        data={item.data}
        renderItem={renderHorizontalItem}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );

  const verticalData = [
    {
      name: "First Save Everyday",
      title: "Save everyday",
      data: FirstSaveEverydayData,
    },
    { name: "Second Save Everyday", title: "", data: SecondSaveEverydayData },
    {
      name: "Plan Your Next Trip",
      title: "Plan Your Next Trip",
      data: PlanTripData,
    },
    {
      name: "Travel made easy",
      title: "Travel made easy",
      data: TravelEasyData,
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <TouchableOpacity
            onPress={handleOpenBottomSheet}
            style={{
              width: "95%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              borderColor: "#86827e",
              backgroundColor: "#cccccc",
              paddingLeft: 24,
              paddingVertical: 12,
              marginTop: 12,
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 20,
            }}
          >
            <Text style={tw`font-bold text-lg`}>Suggestions</Text>
            <Pressable onPress={() => navigation.navigate("Services")}>
              <Text style={{ fontSize: 14 }}>See All</Text>
            </Pressable>
          </View>
          <View style={styles.shortcutsWrapper}>
            {suggestionsData.map((item) => (
              <Tile key={item.title} item={item} />
            ))}
          </View>
        </>
      )}
      data={verticalData}
      renderItem={renderVerticalItem}
      keyExtractor={(item) => item.title}
      contentContainerStyle={tw`pl-5`}
    />
  );
};

export default RidesScreen;

const styles = StyleSheet.create({
  horizontalScrollView: {
    flexDirection: "row",
    alignItems: "center",
  },
  shortcutsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
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
  is2XLImg: {
    height: 115,
    width: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
  },
  is2XLShortcuts: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 115,
    marginRight: 12,
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
