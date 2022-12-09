import { Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoriesList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem key={repo.id} repo={repo} />
      )}
    ></FlatList>
  );
};

export default RepositoriesList;
