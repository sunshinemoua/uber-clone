import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavigateCard from "./NavigateCard";

const SearchDrawer = ({ isBottomSheetOpen, setIsBottomSheetOpen }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get("window").height;

  const handleGoHome = () => {
    navigation.navigate("HomeScreen");
    setIsBottomSheetOpen(false);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.9 }]}>
          <View
            style={{
              flex: 0,
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={handleGoHome}>
              <Icon name="arrow-back-outline" type="ionicon" />
            </TouchableOpacity>
          </View>

          <NavigateCard handleCloseBottomSheet={handleCloseBottomSheet} />
        </View>
      </Modal>
    </View>
  );
};

export default SearchDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    // borderColor: "transparent",
  },
});
