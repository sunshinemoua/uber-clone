import {
  StyleSheet,
  AppRegistry,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import tw from "tailwind-react-native-classnames";
import RidesScreen from "./screens/RidesScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider style={styles.AndroidSafeArea}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={tw`flex-1`}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                v
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RidesScreen"
                component={RidesScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EatsScreen"
                component={EatsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConfirmScreen"
                component={ConfirmScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>

          {/* <HomeScreen /> */}
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
