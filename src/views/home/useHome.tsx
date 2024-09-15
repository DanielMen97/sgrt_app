import { useEffect, useState } from "react"
import { getListRequestByClient } from "../../services/RequestsServices"

interface DataI {
  
}

const useHome = () => {

  const [data, setData] = useState([])

  useEffect(() => {
<<<<<<< HEAD
    getListRequestByClient().then(response => {
=======
    consultationRequestsNoDoc("12345678").then(response => {
>>>>>>> 85cd3fe689f42455697bf6fceac68454d35e53be
      setData(response)
    })
  },[])

<<<<<<< HEAD
  return {
=======
  const columns = ["id", "name", "lastname"]

  return {
    columns,
>>>>>>> 85cd3fe689f42455697bf6fceac68454d35e53be
    data
  }
}

export default useHome
