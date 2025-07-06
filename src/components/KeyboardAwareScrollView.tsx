import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScrollView({
  children,
}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    gap: 6,
  },
});
