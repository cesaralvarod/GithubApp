import { StyleSheet, View, TouchableHighlight } from "react-native";
import StyledText from "./StyledText";
import { theme } from "../theme";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
    color: theme.appBar.primaryText,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { color: theme.appBar.textPrimary },
});

const AppBar = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StyledText style={styles.text}>Repositories</StyledText>
      <TouchableHighlight onPress={() => navigate("SignIn")}>
        <StyledText style={styles.text}>Sign In</StyledText>
      </TouchableHighlight>
    </View>
  );
};

export default AppBar;
