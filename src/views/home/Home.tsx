import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import Table from "../../components/table/Table";
import useHome from "./useHome";
import CustomButton from "../../components/customButtons/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

interface Props extends NativeStackScreenProps<RootStackParamList, "Home"> {}

export const Home = ({ navigation, route }: Props) => {

  const { data, columns, idsol } = useHome();

  useEffect(() => {
    if(idsol){
      navigation.navigate('DetailsRequest')
    }
  },[idsol])

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton text="Crear Solicitud" onPress={() => {
          navigation.navigate("CreateRequest")
        }} />
        <CustomButton
          text="Tus Activos"
          onPress={() => {
            navigation.navigate("YourAssets")
          }}
          backgroundColor="#FF3E3E"
          width={140}
        />
      </View>
      {data.length !== 0 ? (
        <ScrollView horizontal>
          <ScrollView>
            <Table columns={columns} data={data} />
          </ScrollView>
        </ScrollView>
      ) : (
        <Text>Sin Solicitudes</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 20,
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 15,
    gap: 20,
  },
});
