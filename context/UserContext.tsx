import React, { createContext, ReactNode, useState } from 'react'
import { login, ActService } from '../src/services/Services'

interface UserContextI {
  handleInputChange: (property: string, value: string | null) => void;
  onSubmit: () => void;
}

const UserContextContextDefault: UserContextI = {
  handleInputChange: () => {},
  onSubmit: () => {}
}

export const UserContext = createContext<UserContextI>({...UserContextContextDefault})

const UserContextProvider = ({children}:{children:ReactNode}) => {
  
  const [userData, setUserData] = useState({
    correo: "",
    pass: ""
  })

  const handleInputChange = (property: string, value: string | null) => {
    setUserData({...userData, [property]:value})
  }

  const onSubmit = () => {
    // if(!userData.correo || !userData.pass) return console.log("Correo y contraseña obligatorios")
    // login(userData).then(data => console.log(data)).catch(err => console.log(err))
     ActService.getActs().then(data => console.log(data))
  }


  const value = {
    handleInputChange,
    onSubmit
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
