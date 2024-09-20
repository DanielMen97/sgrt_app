import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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