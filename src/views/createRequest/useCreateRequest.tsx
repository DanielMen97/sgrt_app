import { useEffect, useState } from "react";
import {
  createRequests,
  getListCategories,
} from "../../services/RequestsServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

const CategoriesDefault = {
  idcat: 0,
  nombre: "",
};

const useCreateRequest = ({
  navigation,
}:{
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "CreateRequest",
    undefined
  >;
}) => {
  const [categories, setCategories] = useState([{ ...CategoriesDefault }]);

  const [request, setRequest] = useState({
    fechacre: "",
    obser: "",
    nodoccliente: "",
    idcat: 0,
    idest: 0,
    prio: "",
  });

  const handleInputChange = async (
    property: string,
    value: string | number
  ) => {
    const nodoccliente = await AsyncStorage.getItem("user");
    const fechacre = new Date().toLocaleDateString();
    const idest = 1;
    const prio = "PENDIENTE";
    if (nodoccliente) {
      setRequest({
        ...request,
        nodoccliente,
        fechacre,
        idest,
        prio,
        [property]: value,
      });
    }
  };

  const onSubmit = () => {
    createRequests(request)
      .then(() => {
        ToastAndroid.show("Solicitud Creada correctamente", ToastAndroid.LONG);
        navigation.navigate("Home");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getListCategories().then((response) => setCategories(response));
  }, []);

  return {
    categories,
    handleInputChange,
    onSubmit,
  };
};

export default useCreateRequest;
