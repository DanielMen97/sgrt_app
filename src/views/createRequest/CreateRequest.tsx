import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../../App";
import { Text, View, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CustomButton from "../../components/customButtons/CustomButton";
import useCreateRequest from "./useCreateRequest";
import { styles } from './styles'

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CreateRequest"> {}

export const CreateRequest = ({ navigation, route }: Props) => {
  const { categories, handleInputChange, onSubmit } = useCreateRequest({
    navigation,
  });
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: 30,
      }}
    >
      <View style={styles.form}>
        <Text style={styles.formText}>
          Seleccione la categoria de su solicitud...
        </Text>
        <Dropdown
          data={categories}
          labelField="nombre"
          valueField="idcat"
          onChange={(item) => handleInputChange("idcat", item.idcat)}
          maxHeight={300}
          placeholder="Seleccione ..."
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
        <Text style={styles.formText}>
          Ingrese la observación de su solicitud...
        </Text>
        <TextInput
          style={styles.formTextInput}
          multiline
          numberOfLines={8}
          onChangeText={(text) => handleInputChange("obser", text)}
        />
      </View>
      <CustomButton
        text="Guardar Solicitud"
        backgroundColor="#148f77"
        onPress={onSubmit}
      />
    </View>
  );
};

