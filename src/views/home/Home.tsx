import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Button } from "react-native";
import Table from "../../components/table/Table";
import useHome from "./useHome";
import CustomButton from "../../components/customButtons/CustomButton";

export const Home = () => {
  const { data, columns } = useHome();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes</Text>
      <View style={styles.buttons}>
        <CustomButton text="Crear Solicitud" onPress={() => {}} />
        <CustomButton
          text="Tus Activos"
          onPress={() => {}}
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
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 15,
    gap: 20,
  },
});
