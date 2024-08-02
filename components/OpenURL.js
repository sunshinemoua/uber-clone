import React, { useCallback } from "react";
import { Linking, Alert, TouchableOpacity } from "react-native";

const OpenURL = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Sorry, we are unable to open this URL: ${url}`);
    }
  }, [url]);

  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

export default OpenURL;
