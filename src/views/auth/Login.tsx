import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import {
  faUserAstronaut,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useLogin from "./useLogin";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { RootStackParamList } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

interface Props extends NativeStackScreenProps<RootStackParamList, 
'Login'>{};

export const Login = ({navigation, route}: Props) => {

  const { handleInputChange, onSubmit, response } = useLogin();

  useEffect(() => {
    if (response?.nodoc) {
      navigation.replace('Home');
      }   
  },[response])

  return (
    <LinearGradient
      colors={["#5936ce", "#e70e77"]}
      start={{ x: 1.0, y: 0.1 }}
      style={styles.container}
    >

      <View style={styles.loginContainer}>
        <FontAwesomeIcon size={100} icon={faUserAstronaut} style={styles.logo} />
        <View style={styles.title}>
          <Text style={styles.nameApp}>SGRTMobile</Text>
          <Text style={styles.labelApp}>App</Text>
        </View>
        <View style={styles.formLogin}>
          <View style={styles.formInput}>
            <FontAwesomeIcon size={25} style={styles.formIcon} icon={faUser} />
            <TextInput
              style={styles.formTextInput}
              placeholder="Correo electronico"
              placeholderTextColor="#FFFFFF"
              keyboardType="email-address"
              onChangeText={value => handleInputChange("correo", value)}
            />
          </View>
          <View style={styles.formInput}>
            <FontAwesomeIcon size={25} style={styles.formIcon} icon={faLock} />
            <TextInput
              style={styles.formTextInput}
              placeholder="Contraseña"
              placeholderTextColor="#FFFFFF"
              keyboardType="default"
              onChangeText={value => handleInputChange("pass", value)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={onSubmit}>
            <Text style={styles.labelButton}>Ingresar</Text>
          </TouchableOpacity>
          <Text style={styles.version}>Version 1.001</Text>
          <Text style={styles.colaborators}>By Andres Ruiz Deibyth Padilla Cristian Mendoza</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "#ffffff",
    marginBottom: 20,
  },
  title: {
    flexDirection: "row",
    marginBottom: 40,
  },
  nameApp: {
    color: "#ffffff",
    fontSize: 30,
  },
  labelApp: {
    fontWeight: "900",
    fontSize: 30,
    color: "#ffffff",
  },
  formLogin: {},
  formInput: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#ffffff",
    borderWidth: 2,
    width: 300,
    height: 55,
    marginHorizontal: 8,
    marginBottom: 25,
    padding: 3,
    borderRadius: 8,
    overflow: "hidden",
  },
  formIcon: {
    position: "absolute",
    left: 8,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  formTextInput: {
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
  },
  buttonLogin: {
    width: 300,
    height: 55,
    borderRadius: 8,
    paddingVertical: 9,
    marginTop: 30,
    marginHorizontal: 8,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70
  },
  labelButton: {
    fontSize: 20,
  },
  version: {
    textAlign: 'center',
    color: "#ffffff",
    fontStyle: 'italic'
  },
  colaborators: {
    textAlign: 'center',
    color: "#ffffff",
    fontStyle: 'italic'
  }
});

