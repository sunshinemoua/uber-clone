import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import Img from "../assets/test.jpg";

const randomAddresses = [
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    street: "123 Maple St",
    dateTime: "May 1 * 1:25 AM",
    cost: "$45.67",
  },
  {
    id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q",
    street: "456 Oak Ave",
    dateTime: "Aug 12 * 1:25 AM",
    cost: "$78.90",
  },
  {
    id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r",
    street: "789 Pine Rd",
    dateTime: "Jan 25 * 1:25 AM",
    cost: "$32.10",
  },
  {
    id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s",
    street: "101 Birch Blvd",
    dateTime: "Mar 18 * 1:25 AM",
    cost: "$56.78",
  },
  {
    id: "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t",
    street: "202 Cedar Ln",
    dateTime: "Sep 28 * 1:25 AM",
    cost: "$99.99",
  },
  {
    id: "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u",
    street: "303 Elm St",
    dateTime: "Apr 26 * 1:25 AM",
    cost: "$67.43",
  },
  {
    id: "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v",
    street: "404 Spruce Dr",
    dateTime: "Dec 11 * 1:25 AM",
    cost: "$88.99",
  },
  {
    id: "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w",
    street: "505 Fir Ct",
    dateTime: "Sep 18 * 1:25 AM",
    cost: "$45.12",
  },
  {
    id: "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x",
    street: "606 Willow Way",
    dateTime: "Oct 31 * 1:25 AM",
    cost: "$54.67",
  },
  {
    id: "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y",
    street: "707 Redwood Ave",
    dateTime: "Jan 1 * 1:25 AM",
    cost: "$73.89",
  },
];

const ActivityScreen = () => {
  console.log(Img);

  return (
    <>
      <Text style={styles.title}>Activity</Text>
      <ScrollView style={styles.container}>
        {randomAddresses.map(({ id, street, dateTime, cost }) => (
          <View key={id} style={styles.activity}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/test.jpg")}
            />
            <Text style={styles.header}>{street}</Text>
            <Text style={styles.copy}>{dateTime}</Text>
            <Text style={styles.copy}>{cost}</Text>
            <Pressable style={styles.rebook}>
              <Icon name="refresh-outline" type="ionicon" size={16} />
              <Text style={styles.btnCopy}>Rebook</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 72,
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 12,
    marginBottom: 32,
  },

  container: {
    flex: 1,
  },

  tinyLogo: {
    height: 150,
    width: "100%",
    borderRadius: 8,
    marginBottom: 15,
  },

  activity: {
    margin: 15,
    padding: 15,
    display: "flex",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
  },

  copy: {
    fontSize: 12,
    marginBottom: 4,
  },

  btnCopy: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: "bold",
  },

  rebook: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginTop: 10,
  },
});
