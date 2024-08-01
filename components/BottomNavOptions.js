import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import { Icon } from "react-native-elements";
import ActivityScreen from "../screens/ActivityScreen";
import ServicesScreen from "../screens/ServicesScreen";

const BottomNavOptions = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="person-sharp" type="ionicon" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="grid" type="ionicon" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="receipt" type="ionicon" />;
          },
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="person-sharp" type="ionicon" />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavOptions;
