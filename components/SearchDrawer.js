import { useNavigation } from "@react-navigation/native";
import {
  Modal,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import NavigateCard from "./NavigateCard";

const SearchDrawer = ({ isBottomSheetOpen, setIsBottomSheetOpen }) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;

  const handleGoHome = () => {
    navigation.navigate("HomeScreen");
    setIsBottomSheetOpen(false);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.9 }]}>
          <View
            style={{
              flex: 0,
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={handleGoHome}>
              <Icon name="arrow-back-outline" type="ionicon" />
            </TouchableOpacity>
          </View>

          <NavigateCard handleCloseBottomSheet={handleCloseBottomSheet} />
        </View>
      </Modal>
    </View>
  );
};

export default SearchDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
  },
});
