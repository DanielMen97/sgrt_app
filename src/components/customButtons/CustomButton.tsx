import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface props {
  text?: string;
  onPress?: () => void;
  backgroundColor?: string;
  icon?: IconProp,
  width?: number
}

const CustomButton = ({
  text,
  onPress,
  backgroundColor = "#5B63F3",
  icon,
  width
}: props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        borderRadius: 6,
        borderWidth: 0,
        paddingVertical: 4,
        paddingHorizontal: 10,
        width
      }}
      onPress={onPress}
    >
      {icon ? <FontAwesomeIcon icon={icon} color="white" size={21}/> : <Text style={{ color: "white", textAlign: 'center', fontSize: 19 }}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
