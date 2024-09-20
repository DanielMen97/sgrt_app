import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import {
  faUserAstronaut,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useLogin from "./useLogin";
import { LinearGradient } from "expo-linear-gradient";
import { RootStackParamList } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { styles } from './styles'

interface Props extends NativeStackScreenProps<RootStackParamList, 
'Login'>{};

export const Login = ({navigation, route}: Props) => {

  const { handleInputChange, onSubmit, correo, pass } = useLogin();

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
              value={correo}
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
              value={pass}
              onChangeText={value => handleInputChange("pass", value)}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => onSubmit(navigation)}>
            <Text style={styles.labelButton}>Ingresar</Text>
          </TouchableOpacity>
          <Text style={styles.version}>Version 1.001</Text>
          <Text style={styles.colaborators}>By Andres Ruiz Deibyth Padilla Cristian Mendoza</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
