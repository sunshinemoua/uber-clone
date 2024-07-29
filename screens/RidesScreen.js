import React from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const RidesScreen = () => {
  return (
    <View style={tw`p-5 mb-10`}>
      <GooglePlacesAutocomplete
        placeholder="Where to?"
        styles={{
          container: {
            flex: 0,
            borderRadius: "50%",
          },
          textInput: {
            fontSize: 18,
            fontWeight: "bold",
            backgroundColor: "#cccccc",
            borderRadius: 50,
            paddingHorizontal: 25,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        onFail={(test) => console.log("failed", test)}
      />

      <NavFavorites />
    </View>
  );
};

export default RidesScreen;

const styles = StyleSheet.create({});
