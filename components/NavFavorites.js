import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "55 Music Concourse Dr, San Francisco, CA 94118",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "1770 Gibson Rd, San Francisco",
  },
];

const NavFavorites = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={tw`bg-gray-200 h-px`} />}
        renderItem={({ item: { location, destination, icon } }) => (
          <Pressable
            style={({ pressed }) => [
              tw`flex-row items-center p-5 ${pressed && "opacity-50"}`,
            ]}
          >
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
