import {
  StyleSheet,
  AppRegistry,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import BottomNavOptions from "./components/BottomNavOptions";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider style={styles.AndroidSafeArea}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={tw`flex-1`}
          >
            <BottomNavOptions />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

AppRegistry.registerComponent("UBER-CLONE", () => App);

export default App;
