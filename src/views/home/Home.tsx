import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Table from "../../components/Table";
import useHome from "./useHome";

export const Home = () => {

<<<<<<< HEAD
  const { data } = useHome()

  const columns = [
    {
      "header": "N° Sol.",
      "accessorKey": "idsol",
    },
    {
      "header": "Fecha Creación",
      "accessorKey": "fechacre",
    },
    {
      "header": "Estado",
      "accessorKey": "idest",
    },
    {
      "header": "Categoria",
      "accessorKey": "idcat",
    },
    {
      "header": "Tecnico Responsable",
      "accessorKey": "tecnico",
    },
    {
      "header": "Detalles",
    },
    {
      "header": "Fecha Cierre",
      "accessorKey":"fechaci"
    }
  ]

=======
  const { columns, data } = useHome()
>>>>>>> 85cd3fe689f42455697bf6fceac68454d35e53be
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

