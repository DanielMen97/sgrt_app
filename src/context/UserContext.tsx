import React, { createContext, ReactNode, useState } from 'react'
import { login } from '../services/Services'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

interface UserContextI {
  handleInputChange: (property: string, value: string | null) => void;
  onSubmit: () => void;
  response?: any
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

  const [response, setResponse] = useState({})

  const handleInputChange = (property: string, value: string | null) => {
    setUserData({...userData, [property]:value})
  }

  const onSubmit = () => {
    if(!userData.correo || !userData.pass) return ToastAndroid.show("Usuario o contraseña obligatorio", ToastAndroid.LONG)
    login(userData).then(data => {
      AsyncStorage.setItem('user', data.nodoc)
      AsyncStorage.setItem('token', data.token)
      console.log(`Token: ${data.token}`)
      setResponse(data) 
  }).catch(() => {
    ToastAndroid.show("Usuario o contraseña incorrectos", ToastAndroid.LONG)
  })
  }
  
  const value = {
    handleInputChange,
    onSubmit,
    response
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
