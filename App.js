import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent("UBER-CLONE", () => App);

export default App;
