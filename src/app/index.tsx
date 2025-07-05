import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />

      <Stack.Screen options={{ title: 'Home' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
