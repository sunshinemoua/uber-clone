import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavFavorites from "../components/NavFavorites";
import SearchDrawer from "../components/SearchDrawer";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Img from "../assets/test.jpg";
import OpenURL from "../components/OpenURL";
import uuid from "react-native-uuid";

const suggestionsData = [
  {
    id: uuid.v4(),
    id: uuid.v4(),
    title: "Ride",
    icon: "car",
    url: "https://www.uber.com/global/en/sign-in/",
    color: "darkorange",
  },
  {
    id: uuid.v4(),
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
  },
  {
    id: uuid.v4(),
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
  },
  {
    id: uuid.v4(),
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
  },
];

const FirstSaveEverydayData = [
  {
    id: uuid.v4(),
    title: "Add a stop or 5",
    subtitle: "Pick up something along the way",
    url: "https://www.uber.com/global/en/sign-in/",
    isXL: true,
  },
  {
    id: uuid.v4(),
    title: "Go on 2 wheels",
    subtitle: "Take an electronic bike or scooter",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    isXL: true,
  },
];

const SecondSaveEverydayData = [
  {
    id: uuid.v4(),
    title: "Rent without the hassel",
    subtitle: "Learn more",
    url: "https://www.uber.com/global/en/sign-in/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
  {
    id: uuid.v4(),
    title: "Luxury rides for up to 6",
    subtitle: "Try Black SUV",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
  {
    id: uuid.v4(),
    title: "Enjoy a luxury experience",
    subtitle: "Try Uber Black",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
  {
    id: uuid.v4(),
    title: "Get comfortable",
    subtitle: "Try Uber Comfort",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
  {
    id: uuid.v4(),
    title: "When you need more space",
    subtitle: "Request UberXL",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },

  {
    id: uuid.v4(),
    title: "Move what matters",
    subtitle: "Try Connect",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
  {
    id: uuid.v4(),
    title: "Scehdule your ride",
    subtitle: "Try Reserve",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
  {
    id: uuid.v4(),
    title: "Ready? Then let's roll.",
    subtitle: "Ride with Uber",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    is2XL: true,
    imgURL: require("../assets/test.jpg"),
  },
];

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
                <Text style={tw`pr-1 text-sm font-semibold`}>
                  {" "}
                  {item.title}
                </Text>
                <Icon name="arrow-forward-outline" type="ionicon" size={16} />
              </View>
              <Text style={tw`text-xs text-gray-500`}> {item.subtitle}</Text>
            </>
          )}
        </OpenURL>
      )}
    </TouchableOpacity>
  );
};

const RidesScreen = () => {
  const navigation = useNavigation();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    navigation.navigate("MapScreen");
    setIsBottomSheetOpen(true);
  };

  const renderHorizontalItem = ({ item }) => (
    <Tile key={uuid.v4()} item={item} />
  );

  const renderVerticalItem = ({ item }) => (
    <View style={styles.horizontalContainer}>
      {item.title === "Save everyday" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 18,
          }}
        >
          <Text style={tw`font-bold text-lg mb-2`}>Save everyday</Text>
        </View>
      )}
      <FlatList
        horizontal
        data={item.data}
        renderItem={renderHorizontalItem}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );

  const verticalData = [
    {
      name: "First Save Everyday",
      title: "Save everyday",
      data: FirstSaveEverydayData,
    },
    { name: "Second Save Everyday", title: "", data: SecondSaveEverydayData },
  ];

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <TouchableOpacity
            onPress={handleOpenBottomSheet}
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              borderColor: "#86827e",
              backgroundColor: "#cccccc",
              paddingLeft: 24,
              paddingVertical: 12,
              borderRadius: 50,
            }}
          >
            <Icon name="search-outline" type="ionicon" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#434343",
                paddingLeft: 12,
              }}
            >
              Where to?
            </Text>
          </TouchableOpacity>
          {isBottomSheetOpen && (
            <SearchDrawer
              setIsBottomSheetOpen={setIsBottomSheetOpen}
              isBottomSheetOpen={isBottomSheetOpen}
            />
          )}
          <NavFavorites />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={tw`font-bold text-lg`}>Suggestions</Text>
            <Pressable onPress={() => navigation.navigate("Services")}>
              <Text style={{ fontSize: 14 }}>See All</Text>
            </Pressable>
          </View>
          <View style={styles.shortcutsWrapper}>
            {suggestionsData.map((item) => (
              <Tile key={item.title} item={item} />
            ))}
          </View>
        </>
      )}
      data={verticalData}
      renderItem={renderVerticalItem}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.container}
    />
  );
};

export default RidesScreen;

// const RidesScreen = () => {
//   const navigation = useNavigation();

//   const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

//   const handleOpenBottomSheet = () => {
//     navigation.navigate("MapScreen");
//     setIsBottomSheetOpen(true);
//   };

//   const renderHorizontalItems = (data) => (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.horizontalList}
//     >
//       {data.map((item) => (
//         <Tile key={item.title} item={item} />
//       ))}
//     </ScrollView>
//   );

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <TouchableOpacity
//         onPress={() => {
//           handleOpenBottomSheet();
//         }}
//         style={{
//           width: "100%",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "start",
//           borderColor: "#86827e",
//           backgroundColor: "#cccccc",
//           paddingLeft: 24,
//           paddingVertical: 12,
//           borderRadius: 50,
//         }}
//       >
//         <Icon name="search-outline" type="ionicon" />
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: "bold",
//             color: "#434343",
//             paddingLeft: 12,
//           }}
//         >
//           Where to?
//         </Text>
//       </TouchableOpacity>
//       {isBottomSheetOpen && (
//         <SearchDrawer
//           setIsBottomSheetOpen={setIsBottomSheetOpen}
//           isBottomSheetOpen={isBottomSheetOpen}
//         />
//       )}
//       <NavFavorites />

//       {/* Suggestions */}
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginTop: 10,
//         }}
//       >
//         <Text style={tw`font-bold text-lg`}>Suggestions</Text>
//         <Pressable onPress={() => navigation.navigate("Services")}>
//           <Text style={{ fontSize: 14 }}> See All</Text>
//         </Pressable>
//       </View>

//       <View style={styles.shortcutsWrapper}>
//         {suggestionsData.map((item) => (
//           <Tile key={item.title} item={item} />
//         ))}
//       </View>

//       {/* First Save everyday */}
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginTop: 18,
//         }}
//       >
//         <Text style={tw`font-bold text-lg mb-2`}>Save everyday</Text>
//       </View>

//       <View>{renderHorizontalItems(FirstSaveEverydayData)}</View>

//       {/* Second Save everyday */}
//       <View>{renderHorizontalItems(SecondSaveEverydayData)}</View>
//     </ScrollView>
//   );
// };

// export default RidesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  horizontalScrollView: {
    flexDirection: "row",
    alignItems: "center",
  },
  shortcutsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
