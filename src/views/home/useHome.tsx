import { useEffect, useState } from "react"
import { getListRequestByClient } from "../../services/RequestsServices"

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
