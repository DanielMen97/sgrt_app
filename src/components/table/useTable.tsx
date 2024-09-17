import React from "react";
import { ReactNode } from "react";
import { StyleProp, ViewStyle, Text } from "react-native";
import { styles } from "./styles";

const useTable = () => {

  // Arreglo con tamaños del anchura de los celdas
  const sizeColumns = [
    {
      size: "small",
      value: 40,
    },
    {
      size: "medium",
      value: 80,
    },
    {
      size: "large",
      value: 120,
    },
    {
      size: "xlarge",
      value: 140,
    },
  ];

  // Función para asignar ancho a celda
  const getWidth = (item: string | undefined) => {
    const width = item
      ? sizeColumns.filter((size) => size.size === item)[0].value
      : 60;
    return width;
  };

  // Estilos en lineas de la celdas de thead
  const th: StyleProp<ViewStyle> = {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
  };

  //Estilos en linea de las celdas del tbody
  const td: StyleProp<ViewStyle> = {
    justifyContent: "center",
    alignItems: "center",
  };

  // Función retorna la celda personalizada con la información de la fila
  const customCell = (row: any, renderCell: any) => {
    return renderCell(row);
  };

  // Función que renderiza el elemento en la celda: Texto con el valor o una celda personalizada
  const cell = (
    accessorKey: string | undefined,
    row: any,
    renderCell: any | undefined
  ): ReactNode => {
    if (!renderCell && accessorKey) {
      return <Text style={styles.text}>{row[accessorKey]}</Text>;
    } else {
      return customCell(row, renderCell);
    }
  };

  return {
    getWidth,
    th,
    td,
    cell
  };
};

export default useTable;
