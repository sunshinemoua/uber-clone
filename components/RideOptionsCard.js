import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const { travelTimeInformation } = useSelector((state) => state.nav);

  // Convert Google distance from km to miles
  const convertToMiles = (val) => {
    const km = parseFloat(val);
    const miles = km * 0.621371;
    return miles.toFixed(2) + " mi";
  };

  return (
    <View style={tw`bg-white flex-grow h-full`}>
      <View style={tw`flex flex-row items-center justify-around`}>
        <Pressable
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={tw`rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </Pressable>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride -{" "}
          {convertToMiles(travelTimeInformation?.distance?.text)}
        </Text>
        <View></View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <Pressable
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>

            {/* Calculate cost */}
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-usd", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </Pressable>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <Pressable
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          onPress={() => navigation.navigate("ConfirmScreen")}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
