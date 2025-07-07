import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { useController } from "react-hook-form";

type CustomPickerProps = {
  name: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

export default function CustomPicker({
  name,
  ...pickerProps
}: CustomPickerProps) {
  const {
    field: { value, onBlur, onChange },
  } = useController({ name });
  return (
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
        },
      }}
    />
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
});
