import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    table: {
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 10,
      },
      thead: {
        flexDirection: "row",
        backgroundColor: "#B0D3AF",
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
      },
      textHead: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: '700'
      },
      tbody: {},
      tr: {
        borderTopWidth: 2,
        borderColor: "gray",
        flexDirection: "row",
        width: "100%",
        height: 45
      },
      text: {
        textAlign: "center",
        fontSize: 16,
      }
  })