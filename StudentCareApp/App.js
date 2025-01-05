import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { PaperProvider } from "react-native-paper";
const Stack = createNativeStackNavigator();
const appTitle = "Student Care University Of Vavuniya";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#70116d" },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
            }}
            initialRouteName="Login"
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: appTitle }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: appTitle }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

