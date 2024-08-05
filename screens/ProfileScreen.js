import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import uuid from "react-native-uuid";
import {
  moreLinksData,
  quicklinksData,
  shortcutsData,
} from "./ProfileScreenData";
import OpenURL from "../components/OpenURL";

const ProfileScreen = () => {
  return (
    // Profile Header
    <ScrollView style={tw`mt-14`}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Text style={tw`text-2xl font-bold`}>Sunshine M.</Text>
        <Icon name="person-circle-outline" type="ionicon" size={64} />
      </View>

      {/* Shortcuts */}
      <View style={styles.shortcutsWrapper}>
        {shortcutsData.map((item) => (
          <OpenURL key={uuid.v4()} url={item.url}>
            <View style={styles.shortcutContent}>
              <Icon name={item.icon} type="ionicon" />
              <Text style={styles.text}> {item.title}</Text>
            </View>
          </OpenURL>
        ))}
      </View>

      {/* Quicklinks */}
      <View style={tw`m-4`}>
        {quicklinksData.map((item) => (
          <OpenURL key={uuid.v4()} url={item.url}>
            <View style={styles.quicklinks}>
              <View style={{ width: "80%" }}>
                <Text style={styles.header}>{item.title}</Text>
                <Text style={styles.subheader}>{item.subtitle}</Text>
              </View>
              <Icon
                name={item.icon}
                type="ionicon"
                color={item.color}
                size={32}
              />
            </View>
          </OpenURL>
        ))}
      </View>

      <View style={tw`border-t border-2 border-gray-300 `} />

      {/* More Links */}
      <>
        {moreLinksData.map((item) => (
          <OpenURL key={uuid.v4()} url={item.url}>
            <View style={styles.moreLinks}>
              <Icon name={item.icon} type="ionicon" color="#333333" size={18} />
              <View style={tw`w-full pl-5`}>
                <Text style={styles.header}>{item.title}</Text>
                {item.subtitle && (
                  <Text style={styles.subheader}>{item.subtitle}</Text>
                )}
              </View>
            </View>
          </OpenURL>
        ))}
      </>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  shortcutsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 16,
  },
  shortcuts: {
    alignSelf: "center",
    backgroundColor: "#e3e3e3",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  quicklinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e3e3e3",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 12,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subheader: {
    paddingTop: 4,
    fontSize: 12,
    color: "#4c4c4c",
  },
  moreLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 12,
  },
});
