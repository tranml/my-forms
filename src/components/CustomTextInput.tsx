import { ComponentProps } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

type CustomTextInputProps = { label?: string } & ComponentProps<
  typeof TextInput
>;

export default function CustomTextInput({
  label,
  ...textInputProps
}: CustomTextInputProps) {
  const error = { message: "This is an error" };

  console.log(textInputProps);
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : null,
        ]}
      />
      <Text style={styles.error}>{error?.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
  },
  errorInput: {
    borderColor: "crimson",
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
  error: {
    color: "crimson",
    fontSize: 8,
    height: 17,
  },
});
