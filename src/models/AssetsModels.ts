import { SelectChangeEvent } from "@mui/material";
import { SyntheticEvent } from "react";

export interface AssestsGlobalI {
  tabla: TableAssestsI[];
  listMarcas: ListMarcasI[];
  listTipos: ListTiposI[]
}

export const AssestsGlobalDefault: AssestsGlobalI = {
  tabla: [],
  listMarcas: [],
  listTipos: []
}

export interface TableAssestsI {
    idserial: string;
    idtipo: string;
    idmarca: string;
    modelo: string;
    idperson?: string;
}

export const TableAssestsDefault: TableAssestsI = {
  idserial: "",
  idtipo: "",
  idmarca: "",
  modelo: ""
}

export interface ListMarcasI {
  idmarca: number | string;
  nombre: string
}

export const ListMarcasDefault: ListMarcasI = {
  idmarca: "",
  nombre: ""
}

export interface ListTiposI {
  idtipo: number | string;
  nombre: string
}

export const ListTiposDefault: ListTiposI = {
  idtipo: "",
  nombre: ""
}

export interface AssetsFormContextGlobalI {
  typesAct: ListTiposI[];
  marcasAct: ListMarcasI[];
  handleInputChange: (e: SelectChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e:SyntheticEvent) => void;
  updateAct?: TableAssestsI
}

export const AssetsFormContextGlobalDefault: AssetsFormContextGlobalI = {
  typesAct: [],
  marcasAct: [],
  handleInputChange: () => {},
  onSubmit: () => {}
}