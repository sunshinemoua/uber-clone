import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import uuid from "react-native-uuid";
import {
  moreLinksData,
  quicklinksData,
  shortcutsData,
} from "./ProfileScreenData";

const OpenURL = ({ url, item, dataType }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <>
      {dataType === "shortcuts" && (
        <TouchableOpacity onPress={handlePress}>
          <Icon name={item.icon} type="ionicon" />
          <Text style={tw`pt-2`}> {item.title}</Text>
        </TouchableOpacity>
      )}

      {dataType === "quicklinks" && (
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.quicklinks}>
            <View style={{ width: "80%" }}>
              <Text style={styles.qlHeader}>{item.title}</Text>
              <Text style={styles.qlSubheader}>{item.subtitle}</Text>
            </View>
            <Icon
              name={item.icon}
              type="ionicon"
              color={item.color}
              size={32}
            />
          </View>
        </TouchableOpacity>
      )}

      {dataType === "morelinks" && (
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.moreLinks}>
            <Icon name={item.icon} type="ionicon" color="#333333" size={18} />
            <View style={{ width: "90%" }}>
              <Text style={styles.qlHeader}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.qlSubheader}>{item.subtitle}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    // Profile header
    <ScrollView style={styles.profileWrapper}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Sunshine M.</Text>
        <Icon name="person-circle-outline" type="ionicon" size={64} />
      </View>

      {/* Shortcuts */}
      <View style={styles.shortcutsWrapper}>
        {shortcutsData.map((item) => {
          return (
            <OpenURL
              style={styles.shortcuts}
              key={uuid.v4()}
              item={item}
              url={item.url}
              dataType="shortcuts"
            ></OpenURL>
          );
        })}
      </View>

      {/* Quicklinks */}
      <View style={styles.quicklinksWrapper}>
        {quicklinksData.map((item) => {
          return (
            <OpenURL
              style={styles.shortcuts}
              key={uuid.v4()}
              item={item}
              url={item.url}
              dataType="quicklinks"
            ></OpenURL>
          );
        })}
      </View>

      <View style={tw`border-t border-2 border-gray-300 `} />

      {/* More Links */}
      {moreLinksData.map((item) => {
        return (
          <OpenURL
            style={styles.shortcuts}
            key={uuid.v4()}
            item={item}
            url={item.url}
            dataType="morelinks"
          ></OpenURL>
        );
      })}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileWrapper: {
    marginTop: 48,
  },
  shortcutsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 16,
  },
  shortcuts: {
    alignSelf: "center",
    backgroundColor: "lightgray",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  quicklinksWrapper: {
    margin: 16,
  },
  quicklinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 12,
  },
  qlHeader: {
    fontSize: 14,
    fontWeight: "bold",
  },
  qlSubheader: {
    paddingTop: 4,
    fontSize: 12,
    color: "#4c4c4c",
  },
  moreLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 12,
  },
});
