import { useEffect, useState } from "react"
import { consultationRequestsNoDoc } from "../../services/RequestsServices"

interface DataI {
  
}

const useHome = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    consultationRequestsNoDoc("12345678").then(response => {
      setData(response)
    })
  },[])

  const columns = ["id", "name", "lastname"]

  return {
    columns,
    data
  }
}

export default useHome
