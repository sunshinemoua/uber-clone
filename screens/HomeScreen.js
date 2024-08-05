import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RidesScreen from "./RidesScreen";
import EatsScreen from "./EatsScreen";

const HomeScreen = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <TopTab.Navigator>
        <TopTab.Screen name="Rides" component={RidesScreen} />
        <TopTab.Screen name="Eats" component={EatsScreen} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
