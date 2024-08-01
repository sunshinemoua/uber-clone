import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import { Icon } from "react-native-elements";
import ActivityScreen from "../screens/ActivityScreen";
import ServicesScreen from "../screens/ServicesScreen";
import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "red",
  },
};

const BottomNavOptions = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator theme={MyTheme}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="home" type="ionicon" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="grid" type="ionicon" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Activity"
        tabBarActiveBackgroundColor="white"
        component={ActivityScreen}
        options={{
          headerShown: false,
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
