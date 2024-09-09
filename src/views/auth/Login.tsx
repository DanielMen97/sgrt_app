import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import {
  faUserAstronaut,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
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
          />
        </View>
        <View style={styles.formInput}>
          <FontAwesomeIcon size={25} style={styles.formIcon} icon={faLock} />
          <TextInput
            style={styles.formTextInput}
            placeholder="Contraseña"
            placeholderTextColor="#FFFFFF"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <Pressable style={styles.buttonLogin}>
          <Text style={styles.labelButton}>Ingresar</Text>
        </Pressable>
        <Text style={styles.version}>Version 1.001</Text>
        <Text style={styles.colaborators}>By Andres Ruiz Deibyth Padilla Cristian Mendoza</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  version:{
    textAlign: 'center',
    color: "#ffffff",
    fontStyle: 'italic'
  },
  colaborators:{
    textAlign: 'center',
    color: "#ffffff",
    fontStyle: 'italic'
  }
});

export default Login;
