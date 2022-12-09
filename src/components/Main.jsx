import { View } from "react-native";
import AppBar from "./AppBar";
import RepositoriesList from "./RepositoriesList";

export default function Main({ navigation }) {
  return (
    <View>
      <AppBar navigation={navigation} />
      <RepositoriesList />
    </View>
  );
}
