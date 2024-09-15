import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface ColumnsI {
  header: string;
  accessorKey?: string;
}

interface props {
  columns: ColumnsI[];
  data: any[];
}

const Table = ({ columns, data }: props) => {

  return (
    <View style={styles.table}>
      <View style={styles.thead}>
        {columns.map((item) => (
          <View key={columns.indexOf(item) + 1} style={styles.th}>
            <Text style={styles.text}>{item.header}</Text>
          </View>
        ))}
      </View>
      <View style={styles.tbody}>
        {data.map((item) => (
          <View key={data.indexOf(item) + 1} style={styles.tr}>
            {columns.map((elem) => {
              if (elem.accessorKey) return (
                <View key={columns.indexOf(elem) + 1} style={styles.td}>
                  <Text style={styles.text}>{item[elem.accessorKey]}</Text>
                </View>
              )
            })
            }
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 8
  },
  thead: {
    flexDirection: "row",
  },
  th: {
    width: 60
  },
  tbody: {
  },
  tr: {
    borderTopWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  td: {
    width: 60
  },
  text: {
    textAlign: 'center'
  }
});

export default Table;
