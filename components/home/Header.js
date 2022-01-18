import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header_logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <Text style={{ color: "white" }}>Dummy</Text>
        <Text style={{ color: "white" }}>Dummy</Text>
        <Text style={{ color: "white" }}>Dummy</Text>
        <Text style={{ color: "white" }}>Dummy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
    color: "white",
    borderWidth: 2,
    borderColor: "red",
  },
  iconsContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "yellow",
  },
});

export default Header;
