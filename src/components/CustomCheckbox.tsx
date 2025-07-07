import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

type CustomCheckboxProps = {
  name: string;
  label?: string;
};

export default function CustomCheckbox({ name, label }: CustomCheckboxProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Checkbox
        value={true}
        onValueChange={(value) => console.log("value changed:", value)}
        color={true ? "#4630EB" : undefined}
      />
      {label && <Text style={{}}>{label}</Text>}
    </View>
  );
}
