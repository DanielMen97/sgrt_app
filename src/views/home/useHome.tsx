import { useEffect, useState } from "react"
import { getListRequestByClient } from "../../services/RequestsServices"

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
      size: "medium",
    },
    {
      header: "Tecnico Responsable",
      accessorKey: "tecnico",
      size: "large",
    },
    {
      header: "Prioridad",
      accessorKey: "prio",
      size: "medium",
    },
    {
      header: "Detalles",
      size: "medium",
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
