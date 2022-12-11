import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 8,
      }}
    >
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText align="center" color="secondary">
          Stars
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align="center" color="secondary">
          Forks
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.reviewCount)}
        </StyledText>
        <StyledText align="center" color="secondary">
          Watchers
        </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
