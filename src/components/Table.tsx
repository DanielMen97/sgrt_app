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
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.tbody}>
        {data.map((item) => (
          <View key={data.indexOf(item) + 1} style={styles.tr}>
            {Object.keys(item).map((elem) => {
              if (columns.includes(elem)) return (
                <View key={Object.keys(item).indexOf(elem) + 1} style={styles.td}>
                  <Text style={styles.text}>{item[elem]}</Text>
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
  text:{
    textAlign: 'center'
  }
});

export default Table;
