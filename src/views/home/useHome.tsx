import { useEffect, useState } from "react"
import { getListRequestByClient } from "../../services/RequestsServices"

interface DataI {
  
}

const useHome = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getListRequestByClient().then(response => {
      setData(response)
    })
  },[])

  return {
    data
  }
}

export default useHome
