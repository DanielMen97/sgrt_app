import { TableAssestsI } from "../models/AssetsModels"

const baseUrl: string = 'http://192.168.43.21:8080'

export const getListActs = ()=>{
const token = localStorage.getItem('token') 
    return fetch (`${baseUrl}/admintechnical/listtableacts`, {method:'GET', headers: {
    'Authorization': `Bearer ${token}`
    }})
    .then(response => response.json())
}

export const createAct = (Actdatacrete: TableAssestsI) => {
    const token = localStorage.getItem('token') 
    return fetch (`${baseUrl}/admintechnical/add_act`, { method: 'POST', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    }, body: JSON.stringify(Actdatacrete)})
    .then(response => response.json())
}

export const editAct = (idserial: string | undefined, updateAct: TableAssestsI) => {
    const token = localStorage.getItem('token') 
    return fetch (`${baseUrl}/admintechnical/edit_act/${idserial}`, { method: 'PUT', headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    }, body: JSON.stringify(updateAct)})
    .then(response => response.json())
}

export const deleteAct = (idserial: string | number) => {
    const token = localStorage.getItem('token') 
    return fetch (`${baseUrl}/admintechnical/delete_act/${idserial}`, { method: 'DELETE', headers: {
    'Authorization': `Bearer ${token}`
    }})
    .then(response => response.json())
}

export const getListMarcas = () => {
    const token = localStorage.getItem('token') 
    return fetch(`${baseUrl}/admintechnical/marcasact`, { method: 'GET', headers:{
     'Authorization': `Bearer ${token}`   
    }})
    .then(response => response.json())
}

export const getListTipo = () => {
    const token = localStorage.getItem('token') 
    return fetch(`${baseUrl}/admintechnical/tiposacts`, { method: 'GET', headers:{
     'Authorization': `Bearer ${token}`   
    }})
    .then(response => response.json())
}

export const getListActsByUser = () => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token') 
    return fetch(`${baseUrl}/adminuser/listactsuser/${user}`, { method: 'GET', headers:{
        'Authorization': `Bearer ${token}`
    }})
    .then(response => response.json())
}

export const getAct = (idserial: string | undefined) => {
    const token = localStorage.getItem('token') 
    return fetch(`${baseUrl}/admintechnical/activo/${idserial}`, { method: 'GET', headers:{
        'Authorization': `Bearer ${token}`
    }})
    .then(response => response.json())
}

export const getStatisticsAssestsReport = () => {
    const token = localStorage.getItem('token') 
    return fetch(`${baseUrl}/admin/reporteactivos`, { method: 'GET', headers:{
        'Authorization': `Bearer ${token}`
    }})
    .then(response => response.json())
}

