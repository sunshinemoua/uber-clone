import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Button
        onPress={() => navigation.navigate("HomeScreen")}
        title="Home"
        color="#841584"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: "24", fontWeight: "600" }}>Sunshine M.</Text>
        <Icon name="person-circle-outline" type="ionicon" size="64" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
