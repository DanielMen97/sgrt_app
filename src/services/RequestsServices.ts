import { ModifyRequestI, RequestCreateI, UpdateRequestSupervisorI, UpdateRequestTechnicalI } from "../models/RequestModels"
import AsyncStorage from '@react-native-async-storage/async-storage'

const baseUrl: string = 'http://localhost:8080'

export const consultRequests = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/solicitudes`, {method:'GET', headers: {
    'Authorization': `Bearer ${token}`
  },
})
  .then(response => response.json())
}

export const createRequests = (createRequestsData: RequestCreateI) => {
  const token = AsyncStorage.getItem('token')
  return fetch(`${baseUrl}/adminuser/create_solicitud`, {method:'POST', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(createRequestsData)})
  .then(response => response.json())
}

export const modifyRequests = (modifyRequestsData: ModifyRequestI, idsol: number) => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/adminuser/modificar/${idsol}`, {method:'PUT', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(modifyRequestsData)})
  .then(response => response.json())
}

export const consultationRequestsNoDoc = (nodoccliente: string) => {
  const token = AsyncStorage.getItem('token')
  return fetch(`${baseUrl}/adminuser/Solicitudes/${nodoccliente}`, {method:'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
  .then(response => response.json())
}

export const modifyRequestsTec = (modifyRequestsTecData: ModifyRequestI, idsol: number) => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/adminuser/modificar/${idsol}`, {method:'PUT', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(modifyRequestsTecData)})
  .then(response => response.json())
}

export const getListPriority = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/prioridades`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
  }})
  .then(response => response.json())
}

export const getListCategories = () => {
  const token = AsyncStorage.getItem('token')
  return fetch(`${baseUrl}/adminuser/categorias`, { method: 'GET', headers:{
    'Authorization': `Bearer ${token}`
  }})
  .then(response => response.json())
}

export const getRequestById = (idsol:string | undefined) => {
  return fetch(`${baseUrl}/public/solicitud/${idsol}`)
    .then(response => response.json())
}

export const updateRequestSuper = (requestData: UpdateRequestSupervisorI, idsol:string | undefined) => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/modificarTec/${idsol}`, { method: 'PUT', headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(requestData)})
  .then(response => response.json())
}

export const listRequestTech = () => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  return fetch(`${baseUrl}/technical/listsolicitudes/${user}`, { method: 'GET', headers: {
     'Authorization': `Bearer ${token}`
  }})
  .then(response => response.json())
}

export const updateRequestTech = (requestData: UpdateRequestTechnicalI,idsol:string | undefined) => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/technical/updatesolicitud/${idsol}`, { method: 'PUT', headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, body: JSON.stringify(requestData)})
  .then(response => response.json())
}

export const getListRequestByClient = () => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  return fetch(`${baseUrl}/adminuser/solicitudcliente/${user}`, { method: 'GET', headers:{
    'Authorization': `Bearer ${token}`
  }})
  .then(reponse => reponse.json())
} 

export const getDetailsRequest = (requestId: string | undefined) => {
  const token = AsyncStorage.getItem('token')
  return fetch(`${baseUrl}/adminuser/detallesolicitud/${requestId}`, { method: 'GET', headers:{
    'Authorization': `Bearer ${token}`
  }})
  .then(reponse => reponse.json())
}

export const getStatisticsTech = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/estadisticatecnicos`, { method: 'GET', headers: {
    'Authorization': `Bearer ${token}`
 }})
 .then(response => response.json())
}

export const getStatisticsRequest = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/estadisticasolicitudes`, { method: 'GET', headers: {
     'Authorization': `Bearer ${token}`
  }})
  .then(response => response.json())
}

export const getStatisticsRequestReport = () => {
  const token = localStorage.getItem('token')
  return fetch(`${baseUrl}/admin/reportesolicitudes`, { method: 'GET', headers: {
     'Authorization': `Bearer ${token}`
  }})
  .then(response => response.json())
}

