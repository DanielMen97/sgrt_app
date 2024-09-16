import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface ColumnsI {
  header: string;
  accessorKey?: string;
  size?: string
}

const sizeColumns = [
  {
    size: 'small',
    value: 40,
  },
  {
    size: 'medium',
    value: 80,
  },
  {
    size: 'large',
    value: 120,
  }
]

interface props {
  columns: ColumnsI[];
  data: any[];
}

const Table = ({ columns, data }: props) => {

  return (
    <View style={styles.table}>
      <View style={styles.thead}>
        {columns.map((item) => {
          const width = item.size ? sizeColumns.filter((size) => size.size === item.size)[0].value : 60
          return <View key={columns.indexOf(item) + 1} style={{ width: width }}>
            <Text style={styles.text}>{item.header}</Text>
          </View>
        }
        )}
      </View>
      <View style={styles.tbody}>
        {data.map((item) => (
          <View key={data.indexOf(item) + 1} style={styles.tr}>
            {columns.map((elem) => {
              const width = elem.size ? sizeColumns.filter((size) => size.size === elem.size)[0].value : 60
              if (elem.accessorKey) {
                return <View key={columns.indexOf(elem) + 1} style={{ width: width }}>
                  <Text style={styles.text}>{item[elem.accessorKey]}</Text>
                </View>
              }
            })}
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
    justifyContent: 'center',
    width: 'auto',
    paddingHorizontal: 2
  },
  tbody: {
  },
  tr: {
    borderTopWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
    width: '100%'
  },
  td: {
    justifyContent: 'center',
    width: 'auto',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  }
});

export default Table;
