import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import Table from "../../components/Table";
import useHome from "./useHome";

export const Home = () => {

  const columns = [
    {
      "header": "N° Sol.",
      "accessorKey": "idsol",
      "size": "small"
    },
    {
      "header": "Fecha Creación",
      "accessorKey": "fechacre",
      "size": "medium"
    },
    {
      "header": "Estado",
      "accessorKey": "idest",
      "size": "medium"
    },
    {
      "header": "Categoria",
      "accessorKey": "idcat",
      "size": "medium"
    },
    {
      "header": "Tecnico Responsable",
      "accessorKey": "tecnico",
      "size": "large"
    },
    {
      "header": "Detalles",
      "size": "small"
    },
    {
      "header": "Fecha Cierre",
      "accessorKey":"fechaci",
      "size": "medium"
    }
  ]


  const { data } = useHome()

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
      <ScrollView horizontal>
      <Table columns={columns} data={data} />
      </ScrollView>
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

