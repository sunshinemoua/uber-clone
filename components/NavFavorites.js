import { Pressable, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home",
    name: "Home",
    location: { lat: 38.57667, lng: -121.49361 },
    description: "1315 10th St, Sacramento, CA 95814",
  },
  {
    id: "456",
    icon: "briefcase",
    name: "Work",
    location: { lat: 38.57714, lng: -121.50682 },
    description: "216 O St, Sacramento, CA 95814",
  },
];

const NavFavorites = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={tw`bg-gray-200 h-px`} />}
        renderItem={({ item: { name, description, icon } }) => (
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
              <Text style={tw`font-semibold text-lg`}>{name}</Text>
              <Text style={tw`text-gray-500`}>{description}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default NavFavorites;
