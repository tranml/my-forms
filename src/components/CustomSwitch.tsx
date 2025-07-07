import { View, Text, Switch } from "react-native";
import { useController } from "react-hook-form";

type CustomSwitchProps = {
  name: string;
  label?: string;
};

export default function CustomSwitch({ name, label }: CustomSwitchProps) {
    const {field: {value, onChange}} = useController({name})
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 12, justifyContent: "space-between" }}>
      {label && <Text style={{fontWeight: "500"}}>{label}</Text>}
      <Switch
        value={value}
        onValueChange={(value) => onChange(value)}
      />
    </View>
  );
}
