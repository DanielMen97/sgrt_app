import { UserDataCreateI, UserDataI } from "../models/Global"

// const baseUrl: string = 'http://192.168.1.39:8080'
const baseUrl: string = 'http://192.168.43.21:8080'


export const login = (userData: UserDataI) => {
  return fetch(`${baseUrl}/auth/login`, {method:'POST', headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify(userData)})
  .then(response => response.json())
}

export const getModules = () => {
  return fetch (`${baseUrl}/public/modulosxrol`)
    .then(response => response.json())
}

export const createUser = (userDataCreate: UserDataCreateI) => {
  const token = localStorage.getItem('token')
  return fetch (`${baseUrl}/admin/create`, { method: 'POST', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(userDataCreate)})
    .then(response => response.json())
}

export const getListRoles = () => {
  const token = localStorage.getItem('token')
  return fetch (`${baseUrl}/admin/roles`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
    .then(response => response.json())
}

export const getListCargos = () => {
  const token = localStorage.getItem('token')
  return fetch (`${baseUrl}/admin/cargos`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
    .then(response => response.json())
}

export const getListSede = () => {
  const token = localStorage.getItem('token')
  return fetch (`${baseUrl}/admin/sedes`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
    .then(response => response.json())
}

export const getAllUser = () => {
  const token = localStorage.getItem('token')
  return fetch (`${baseUrl}/admin/listatablapersonas`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
    .then(response => response.json())
}

export const getListTiposdoc = () => {
  const token = localStorage.getItem('token')
  return fetch (`${baseUrl}/admin/tiposdoc`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
    .then(response => response.json())
}

export const getListTech = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/tecnicos`, {method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }}).then(response => response.json())
}

export const getUsers = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admintechnical/listapersonas`, {method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }}).then(response => response.json())
}

export const getUserByNodoc = (userId: string | undefined) => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/userbynodoc/${userId}`, {method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }}).then(response => response.json())
}

export const getUserMyInfo = () => {
  const user = localStorage.getItem('user') 
  return fetch(`${baseUrl}/public/myinfo/${user}`)
  .then(response => response.json())
}

export const userUpdate = (userId: string | undefined, userData: UserDataCreateI) => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/updateuser/${userId}`, {method: 'PUT', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(userData)})
  .then(response => response.json())
}

export const getStatisticsUsersReport = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/reportespersonas`, {method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }}).then(response => response.json())
}
