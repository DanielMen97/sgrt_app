import { useState } from "react";
import { ToastAndroid } from "react-native";
import { login } from "../../services/Services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

const useLogin = () => {
  const [userData, setUserData] = useState({
    correo: "",
    pass: "",
  });

  const [response, setResponse] = useState({});

  const handleInputChange = (property: string, value: string | null) => {
    setUserData({ ...userData, [property]: value });
  };

  const onSubmit = (
    navigation: NativeStackNavigationProp<RootStackParamList, "Login", undefined>
  ) => {
    if (!userData.correo || !userData.pass)
      return ToastAndroid.show(
        "Usuario o contraseña obligatorio",
        ToastAndroid.LONG
      );
    login(userData)
      .then((data) => {
        AsyncStorage.setItem("user", data.nodoc);
        AsyncStorage.setItem("token", data.token);
        console.log(`Token: ${data.token}`);
        setResponse(data);
        setUserData({
          correo: "",
          pass: "",
        });
        navigation.navigate('Home')
      })
      .catch(() => {
        ToastAndroid.show(
          "Usuario o contraseña incorrectos",
          ToastAndroid.LONG
        );
      });
  };

  return {
    handleInputChange,
    onSubmit,
    response,
    ...userData,
  };
};

export default useLogin;
