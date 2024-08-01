import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavFavorites from "../components/NavFavorites";
import SearchDrawer from "../components/SearchDrawer";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

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
    </View>
  );
};

export default RidesScreen;
