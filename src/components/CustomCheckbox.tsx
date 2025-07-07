import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";

type CustomCheckboxProps = {
  name: string;
  label?: string;
};

export default function CustomCheckbox({ name, label }: CustomCheckboxProps) {
    const {field: {value, onChange}} = useController({name})
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Checkbox
        value={value}
        onValueChange={(value) => onChange(value)}
        color={value ? "#4630EB" : undefined}
      />
      {label && <Text style={{}}>{label}</Text>}
    </View>
  );
}
