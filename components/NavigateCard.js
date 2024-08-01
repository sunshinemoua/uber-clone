import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";

const NavigateCard = ({ handleCloseBottomSheet }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white px-4`}>
      <Text style={tw`text-center text-xl p-2`}>Plan your ride </Text>
      <View>
        <View style={tw`border border-black rounded-lg`}>
          {/* CURRENT LOCATION */}
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minlength={2}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
            }}
            enablePoweredByContainer={false}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
          <View style={tw`border-t border-gray-300 `} />

          {/* DESTINATION */}
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minlength={2}
            onPress={(data, details = null) => {
              handleCloseBottomSheet();
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={false}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavorites />
      </View>
    </View>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    border: 0,
  },
  textInput: {
    fontSize: 14,
    borderRadius: 100,
  },
  textInputContainer: {
    paddingBottom: 0,
    border: 0,
  },
});
