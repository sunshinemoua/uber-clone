import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import MapScreen from "../screens/MapScreen";
import EatsScreen from "../screens/EatsScreen";
import RidesScreen from "../screens/RidesScreen";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const TopNavOptions = () => {
  const navigation = useNavigation();
  const { origin } = useSelector((state) => state.nav);
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="RidesScreen"
        component={RidesScreen}
        options={{ tabBarLabel: "Rides" }}
      />
      <Tab.Screen
        name="EatsScreen"
        component={EatsScreen}
        options={{ tabBarLabel: "Eats" }}
      />
    </Tab.Navigator>
    // <FlatList
    //   className={tw`flex flex-row items-center justify-center`}
    //   data={data}
    //   keyExtractore={(item) => item.id}
    //   horizontal
    //   renderItem={({ item }) => (
    //     <Pressable
    //       onPress={() => navigation.navigate(item.screen)}
    //       style={({ pressed }) => [
    //         pressed
    //           ? tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40 h-60 opacity-50`
    //           : tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40 h-60 opacity-100`,
    //       ]}
    //       disables={!origin}
    //     >
    //       <View style={tw`${!origin && "opacity-20"}`}>
    //         <Image
    //           style={{ width: 120, height: 120, resizeMode: "contain" }}
    //           source={{ uri: item.image }}
    //         />
    //         <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
    //         <Icon
    //           style={tw`p-2 bg-black rounded-full w-10 mt-4`}
    //           name="arrowright"
    //           color="white"
    //           type="antdesign"
    //         ></Icon>
    //       </View>
    //     </Pressable>
    //   )}
    // />
  );
};

export default TopNavOptions;
