import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    dropdown: {
      marginVertical: 10,
      height: 50,
      backgroundColor: "white",
      borderRadius: 12,
      padding: 12,
      shadowColor: "#000",
      width: 250,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    form: {
      paddingHorizontal: 20,
      width: "100%",
    },
    formText: {
      fontStyle: "italic",
    },
    formTextInput: {
      width: "100%",
      backgroundColor: "white",
      height: 150,
      borderRadius: 12,
      marginVertical: 10,
      padding: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      textAlignVertical: "top",
      fontSize: 17,
    },
  });
  