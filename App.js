import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Je suis dans le champs de vision</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
