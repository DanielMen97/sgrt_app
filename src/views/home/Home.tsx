import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Table from "../../components/Table";
import useHome from "./useHome";

export const Home = () => {

  const { columns, data } = useHome()
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

