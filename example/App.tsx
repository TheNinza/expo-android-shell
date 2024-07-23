import * as ExpoAndroidShell from "expo-android-shell";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Run shell command synchronously"
        onPress={() => {
          const output = ExpoAndroidShell.execCommand("whoami");
          console.log(output);
        }}
      />

      <Button
        title="Run shell command on a separate native thread"
        onPress={async () => {
          const output = await ExpoAndroidShell.execCommandAsync("whoami");
          console.log(output);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
