import { StyleSheet, Text, View } from 'react-native';

import * as ExpoAndroidShell from 'expo-android-shell';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoAndroidShell.hello()}</Text>
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
