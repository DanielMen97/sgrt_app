import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../../App";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CustomButton from "../../components/customButtons/CustomButton";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CreateRequest"> {}

export const CreateRequest = ({ navigation, route }: Props) => {
  return (
    <View style={{alignItems: 'center', width: "100%", height: "100%", paddingTop: 30}}>
      <View style={styles.form}>
        <Text style={styles.formText}>Seleccione la categoria de su solicitud...</Text>
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          onChange={(item) => console.log(item)}
          maxHeight={300}
          placeholder="Select item"
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
        <Text style={styles.formText}>Ingrese la observación de su solicitud...</Text>
        <TextInput style={styles.formTextInput} multiline numberOfLines={8}/>
      </View>
      <CustomButton text="Guardar Solicitud" backgroundColor="#148f77"/>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: '100%'
  },
  formText: {
    fontStyle: 'italic',
  },
  formTextInput:{
    width: '100%',
    backgroundColor: 'white',
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
    textAlignVertical: 'top'
  }
});
