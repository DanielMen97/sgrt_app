import UserContextProvider from "./src/context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/views/auth/Login";
import { Home } from "./src/views/home/Home";
import { CreateRequest } from "./src/views/createRequest/CreateRequest";
import { YourAssets } from "./src/views/yourAssets/YourAssets";
import React from "react";
import CustomButton from "./src/components/customButtons/CustomButton";
import {
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CreateRequest: undefined;
  YourAssets: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }}/>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerTitle: 'Solicitudes',
              headerBackVisible: false,
              headerRight: () => (
                <CustomButton
                  backgroundColor="#0953AE"
                  icon={faArrowRightFromBracket}
                  onPress={() =>{
                    AsyncStorage.removeItem("token");
                    AsyncStorage.removeItem("user");
                    navigation.navigate("Login");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen name="CreateRequest" component={CreateRequest} options={{
            headerTitle: 'Crear Solicitud'
          }} />
          <Stack.Screen name="YourAssets" component={YourAssets} options={{
            headerTitle: 'Tus Activos'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}
