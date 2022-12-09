import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import { theme } from "../theme";

const RepositoryItemHeader = ({
  name,
  owner,
  fullName,
  description,
  language,
}) => (
  <View>
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View style={{ flexGrow: 0 }}>
        <Image style={styles.image} source={{ uri: owner.avatar }}></Image>
      </View>
      <View style={{ paddingLeft: 8, flexGrow: 1 }}>
        <StyledText fontWeight="bold" fontSize="subheading">
          {name}
        </StyledText>
        <StyledText color="secondary">{fullName}</StyledText>
        {language && (
          <StyledText style={styles.language}>{language}</StyledText>
        )}
      </View>
    </View>
    {description && (
      <View style={{ paddingTop: 8 }}>
        <StyledText>{description}</StyledText>
      </View>
    )}
  </View>
);

const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader {...repo} />
      <RepositoryStats {...repo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 3,
    paddingHorizontal: 8,
    marginTop: 4,
    fontSize: 12,
    marginBottom: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
