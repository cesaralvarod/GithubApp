import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
  },
  colorPrimary: { color: theme.colors.textPrimary },
  colorSecondary: { color: theme.colors.textSecondary },
  bold: { fontWeight: theme.fontWeights.bold },
  subheading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  children,
  color,
  align,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    align === "center" && styles.textAlignCenter,
    fontWeight === "bold" && styles.bold,
    fontSize === "subheading" && styles.subheading,
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
