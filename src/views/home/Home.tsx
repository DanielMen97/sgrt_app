import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Table from "../../components/Table";

const Home = () => {

  const columns = ["id", "name", "lastname"]

  const data = [
    {
      "id": 1, "name": "Daniel", "lastname": "Mendoza", "age": 19
    },
    {
      "id": 2, "name": "Jose", "lastname": "Pulido"
    },
    {
      "id": 3, "name": "Martha", "lastname": "Aguilar"
    }
  ]
  return (
    <View style={styles.container}>
      <Text>Solicitudes</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable>
          <Text>Crear Solicitud</Text>
        </Pressable>
        <Pressable>
          <Text>Tus Activos</Text>
        </Pressable>
      </View>
      <Table columns={columns} data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "80%",
    alignItems: "center",
    padding: 20,
  }
});

export default Home;
