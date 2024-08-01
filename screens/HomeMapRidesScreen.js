import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import RidesScreen from "./RidesScreen";
import ConfirmScreen from "./ConfirmScreen";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="RidesScreen"
      component={RidesScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="ConfirmScreen"
      component={ConfirmScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
