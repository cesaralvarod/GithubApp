import { Text, FlatList } from "react-native";
import { useRepositories } from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const RepositoriesList = () => {
  const { repositories } = useRepositories();

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
