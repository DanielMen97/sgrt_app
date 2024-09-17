import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../../App";
import { Text, View } from "react-native";

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CreateRequest"> {}

export const CreateRequest = ({ navigation, route }: Props) => {
  return (
    <View style={{backgroundColor: 'red', justifyContent: 'center', width: '100%', height: '100%'}}>
      <Text style={{textAlign: 'center'}}>Crear Solicitud</Text>
    </View>
  );
};
