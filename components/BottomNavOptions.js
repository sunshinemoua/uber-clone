import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfirmScreen from "../screens/ConfirmScreen";

const BottomNavOptions = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="RideScreen" component={ConfirmScreen} />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavOptions;
