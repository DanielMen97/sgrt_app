import { useContext } from "react"
import { HomeContext } from "../../context/HomeContext";

const useHome = () => {

  const context = useContext(HomeContext)
  
  return context
}

export default useHome
