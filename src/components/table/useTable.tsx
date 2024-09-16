import { StyleProp, ViewStyle } from "react-native";

const useTable = () => {

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
      ];

      const getWidth = (item: string | undefined) => {
        const width = item
          ? sizeColumns.filter((size) => size.size === item)[0].value
          : 60;
        return width;
      };

      const th: StyleProp<ViewStyle> = {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2
      };
      
    const td: StyleProp<ViewStyle> = {
        justifyContent: 'center',
        alignItems: 'center'
      };

  return {
    getWidth,
    th,
    td
  }
}

export default useTable
