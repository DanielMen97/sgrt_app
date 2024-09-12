import UserContextProvider from "./context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/views/auth/Login";
import { Home } from "./src/views/home/Home";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
  );
};