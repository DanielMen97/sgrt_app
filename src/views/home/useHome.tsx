import { useEffect, useState } from "react"
import { consultationRequestsNoDoc } from "../../services/RequestsServices"

const useHome = () => {

  const [request, setRequest] = useState()

  useEffect(() => {
    consultationRequestsNoDoc("12345678").then(data => {
      setRequest(data)
    })
  },[])


  return {

  }
}

export default useHome
