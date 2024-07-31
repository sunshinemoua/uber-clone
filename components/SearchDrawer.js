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

const SearchDrawer = ({ isBottomSheetOpen, setIsBottomSheetOpen }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get("window").height;

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View>
      {/* <TouchableOpacity
        onPress={handleOpenBottomSheet}
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
      </TouchableOpacity> */}
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
            <Text
              text={"Preview"}
              family={"Poppins-med"}
              size={16}
              color={"#86827e"}
            />
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
          </View>

          <View style={{ paddingVertical: 16 }}>
            <Text
              text={"Unyime Emmanuel"}
              family={"PoppinsSBold"}
              color={"#292929"}
              size={18}
            />
            <Text
              text={`I'm a Software Engineer and Technical Writer, I've had the TypeScript epiphany!. Oh, I play Chess too!`}
              family={"Poppins"}
              color={"#86827e"}
              size={14}
            />

            <View
              style={{
                opacity: 0.2,
                height: 1,
                borderWidth: 1,
                borderColor: "#86827e",
                marginVertical: 16,
              }}
            />
            <View
              style={{
                flex: 0,
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                text={"24"}
                color={"#292929"}
                family={"PoppinsSBold"}
                size={24}
              />
              <Text
                text={" articles written"}
                color={"#86827e"}
                size={14}
                family={"Poppins-med"}
              />
            </View>

            <View style={{ paddingTop: 16 }}>
              <Text
                text={"Views (30 days)"}
                color={"#86827e"}
                size={12}
                family={"Poppins-med"}
              />
              <Text
                text={"4,904"}
                color={"#292929"}
                family={"PoppinsSBold"}
                size={18}
              />
            </View>

            <View style={{ paddingTop: 16 }}>
              <Text
                text={"Views (30 days)"}
                color={"#86827e"}
                size={12}
                family={"Poppins-med"}
              />
              <Text
                text={"4,904"}
                color={"#292929"}
                family={"PoppinsSBold"}
                size={18}
              />
            </View>

            <View style={{ paddingTop: 16 }}>
              <Text
                text={"Reads (30 days)"}
                color={"#86827e"}
                size={12}
                family={"Poppins-med"}
              />
              <Text
                text={"3038"}
                color={"#292929"}
                family={"PoppinsSBold"}
                size={18}
              />
            </View>

            <View style={{ paddingTop: 16, flex: 0, flexDirection: "row" }}>
              <Icon name="chevron-left" type="fontawesome" />

              <View style={{ paddingLeft: 12 }} />
              <Text
                text={"Medium"}
                color={"#86827e"}
                size={14}
                family={"Poppins-med"}
              />
            </View>
          </View>
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
