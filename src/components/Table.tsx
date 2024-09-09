import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface props {
  columns: string[];
  data: any[];
}

const Table = ({ columns, data }: props) => {

  return (
    <View style={styles.table}>
      <View style={styles.thead}>
        {columns.map((item) => (
          <View key={columns.indexOf(item) + 1} style={styles.th}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.tbody}>
        {data.map((item) => (
          <View key={data.indexOf(item) + 1} style={styles.tr}>
            {Object.keys(item).map((elem) => {
              if (columns.includes(elem)) return (
                <View key={Object.keys(item).indexOf(elem) + 1} style={styles.td}>
                  <Text>{item[elem]}</Text>
                </View>
              )
            }
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 2,
  },
  thead: {
    backgroundColor: "blue",
    flexDirection: "row",
  },
  th: {},
  tbody: {
  },
  tr: {
    borderWidth: 2,
    borderColor: 'red',
    flexDirection: 'row'
  },
  td: {
  },
});

export default Table;
