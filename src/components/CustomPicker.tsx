import { ComponentProps } from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { useController } from "react-hook-form";

type CustomPickerProps = {
  name: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

export default function CustomPicker({
  name,
  label,
  containerStyle,
  ...pickerProps
}: CustomPickerProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNPickerSelect
        {...pickerProps}
        value={value}
        onValueChange={(value) => onChange(value)}
        onClose={onBlur}
        style={{
          viewContainer: {
            ...styles.container,
          },
          inputIOS: {
            ...styles.inputIOS,
            ...(error && styles.errorInput),
          },
        }}
      />

      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 4,
  },
  inputIOS: {
    borderColor: "gainsboro",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    pointerEvents: "none",
  },
  errorInput: {
    borderColor: "crimson",
  },
  error: {
    color: "crimson",
    fontSize: 8,
    height: 17,
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
});
