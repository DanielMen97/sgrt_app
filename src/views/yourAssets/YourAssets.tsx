import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../../../App';
import { Text } from 'react-native';

interface Props extends NativeStackScreenProps<RootStackParamList, "YourAssets"> {}

export const YourAssets = ({navigation, route}: Props) => {
  return (
    <Text>Tus Activos</Text>
  )
};
