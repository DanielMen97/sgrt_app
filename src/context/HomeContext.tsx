import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getListRequestByClient } from "../services/RequestsServices";
import CustomButton from "../components/customButtons/CustomButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ColumnsI } from "../components/table/Table";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

interface HomeContextI {
  columns: ColumnsI[];
  data: any[];
  idsol: string | number;
}

const HomeContextDefault: HomeContextI = {
  columns: [],
  data: [],
  idsol: 0,
};

export const HomeContext = createContext<HomeContextI>({
  ...HomeContextDefault,
});

const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState([]);
  const [idsol, setIdsol] = useState(0);

  const columns = [
    {
      header: "N° Sol.",
      accessorKey: "idsol",
      size: "small",
    },
    {
      header: "Fecha Creación",
      accessorKey: "fechacre",
      size: "medium",
    },
    {
      header: "Estado",
      accessorKey: "idest",
      size: "large",
    },
    {
      header: "Tecnico Responsable",
      accessorKey: "tecnico",
      size: "xlarge",
    },
    {
      header: "Prioridad",
      accessorKey: "prio",
      size: "large",
    },
    {
      header: "Detalles",
      size: "medium",
      renderCell: (row: any) => {
        return (
          <CustomButton
            backgroundColor="#38761d"
            icon={faPlus}
            onPress={() => setIdsol(row.idsol)}
          />
        );
      },
    },
    {
      header: "Fecha Cierre",
      accessorKey: "fechaci",
      size: "medium",
    },
  ];

  useEffect(() => {
    getListRequestByClient().then((response) => {
      setData(response);
    });
  }, []);

  const value = {
    idsol,
    data,
    columns,
  };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
