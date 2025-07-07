import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

export default function CustomCheckbox() {
  return <View>
    <Checkbox
      value={true}
      onValueChange={(value) => console.log("value changed:", value)}
      color={true ? "#4630EB" : undefined}
    />
  </View>;
}