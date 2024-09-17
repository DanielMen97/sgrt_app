import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import useTable from "./useTable";
import { styles } from "./styles";

interface ColumnsI {
  header: string;
  accessorKey?: string;
  size?: string;
  renderCell?: (row: any) => ReactNode;
}

interface props {
  columns: ColumnsI[];
  data: any[];
}

const Table = ({ columns, data }: props) => {

  const { getWidth, td, th, cell } = useTable();

  return (
    <View style={styles.table}>
      <View style={styles.thead}>
        {columns.map((item) => {
          return (
            <View
              key={columns.indexOf(item) + 1}
              style={{ ...th, width: getWidth(item.size) }}
            >
              <Text style={styles.textHead}>{item.header}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.tbody}>
        {data.map((item) => (
          <View key={data.indexOf(item) + 1} style={styles.tr}>
            {columns.map((elem) => (
              <View
                key={columns.indexOf(elem) + 1}
                style={{ ...td, width: getWidth(elem.size) }}
              >
                {cell(elem.accessorKey, item, elem.renderCell)}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
export default Table;
