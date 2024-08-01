import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../components/Map";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ConfirmScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-xl`}
      >
        <Icon name="home-outline" type="ionicon" />
      </Pressable>
      <View style={tw`h-3/4`}>
        <Map />
      </View>

      <View style={{ flex: 1, paddingTop: 24, alignItems: "center" }}>
        <Text style={styles.text}>Your ride will be here shortly.</Text>
        <Text style={styles.text}>Thank you for choosing Uber!</Text>
      </View>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: "bold",
  },
});
