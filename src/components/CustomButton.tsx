import { ReactNode } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function CustomButton({
  title,
  onPress,
  rightIcon,
  style,
}: CustomButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIconContainer}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    width: "100%",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  rightIconContainer: {
    position: "absolute",
    right: 20,
  },
});
