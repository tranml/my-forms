import { ComponentProps } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

type CustomTextInputProps = { label?: string } & ComponentProps<
  typeof TextInput
>;

export default function CustomTextInput({
  label,
  ...textInputProps
}: CustomTextInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...textInputProps} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
});
