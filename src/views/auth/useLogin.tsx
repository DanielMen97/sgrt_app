import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const useLogin = () => {

  const context = useContext(UserContext);

  return context
}

export default useLogin
