import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import OpenURL from "../components/OpenURL";
import uuid from "react-native-uuid";

export const Tile = ({ item }) => {
  return (
    <TouchableOpacity
      style={
        !!item?.is2XL
          ? styles.is2XLShortcuts
          : !!item?.isXL
          ? styles.XLShortcuts
          : !!item?.isBig
          ? styles.bigShortcuts
          : !!item?.isMedium
          ? styles.mediumShortcuts
          : styles.shortcuts
      }
    >
      {item.icon ? (
        <OpenURL key={uuid.v4()} url={item.url}>
          <Icon name={item.icon} type="ionicon" color={item.color} />
          <Text style={tw`pt-2 text-xs`}> {item.title}</Text>
        </OpenURL>
      ) : (
        <OpenURL key={uuid.v4()} url={item.url}>
          {item.is2XL ? (
            <View
              style={tw`flex-row w-full justify-between bg-purple-700 rounded-lg`}
            >
              <View style={tw`w-3/5`}>
                <Text style={tw`p-3 text-base font-bold text-white`}>
                  {item.title}
                </Text>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-xs text-white font-semibold pl-3`}>
                    {item.subtitle}
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    type="ionicon"
                    size={16}
                    color="white"
                  />
                </View>
              </View>
              <Image style={styles.is2XLImg} source={item.imgURL} />
            </View>
          ) : (
            <>
              <Image
                style={styles.img}
                source={require("../assets/test.jpg")}
              />
              <View style={tw`flex-row items-center justify-start`}>
                <Text style={tw`pr-1 text-sm font-semibold`}>{item.title}</Text>
                <Icon name="arrow-forward-outline" type="ionicon" size={16} />
              </View>
              <Text style={tw`text-xs text-gray-500`}>{item.subtitle}</Text>
            </>
          )}
        </OpenURL>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  horizontalScrollView: {
    flexDirection: "row",
    alignItems: "center",
  },
  shortcutsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    marginTop: 16,
  },
  shortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    width: 78,
    height: 64,
    borderRadius: 10,
  },
  img: {
    height: 115,
    width: "100%",
    borderRadius: 8,
    marginBottom: 5,
  },
  is2XLImg: {
    height: 115,
    width: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
  },
  is2XLShortcuts: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 115,
    marginRight: 12,
  },
  XLShortcuts: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: 10,
    width: 215,
    height: 175,
    marginRight: 12,
  },
  bigShortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    width: 175,
    height: 100,
  },
  mediumShortcuts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});
