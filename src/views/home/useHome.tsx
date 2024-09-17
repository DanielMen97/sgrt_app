import { useEffect, useState } from "react"
import { getListRequestByClient } from "../../services/RequestsServices"
import React from "react";
import CustomButton from "../../components/customButtons/CustomButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const useHome = () => {

  const [data, setData] = useState([])

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
          <CustomButton backgroundColor="#38761d" icon={faPlus} onPress={() => {console.log(row.idsol)}}/>
        )
      }
    },
    {
      header: "Fecha Cierre",
      accessorKey: "fechaci",
      size: "medium",
    },
  ];

  useEffect(() => {
    getListRequestByClient().then(response => {
      setData(response)
    })
  },[])

  return {
    data,
    columns
  }
}

export default useHome
