import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";
import { useDispatch } from "react-redux";
import SearchDrawer from "../components/SearchDrawer";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const RidesScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    navigation.navigate("MapScreen");
    setIsBottomSheetOpen(true);
  };

  const handlePress = (data, details = null) => {
    console.log(data, details);
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
    handleOpenBottomSheet();
  };

  return (
    <View style={tw`p-5 mb-10`}>
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
      <Button
        onPress={() => navigation.navigate("ProfileScreen")}
        title="Profile"
        color="#841584"
      />
    </View>
  );
};

export default RidesScreen;

const styles = StyleSheet.create({});
