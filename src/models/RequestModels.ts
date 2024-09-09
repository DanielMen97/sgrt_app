export interface RequestI {
    idsol: number | string;
    fechacre: string;
    fechaci?:string;
    prio?: number | string;
    obser: string;
    diag?: string;
    nodoccliente: string;
    nodoctecnico?: string;
    idcat: number | string;
    idest: number | string;
}

export const RequestDefault = {
  idsol: "",
  fechacre: "",
  obser: "",
  nodoccliente: "",
  idcat: "",
  idest: ""
}

export interface RequestCreateI {
  fechacre: string;
  obser: string;
  nodoccliente: string | undefined;
  idcat: number | string;
  idest: number | string;
  prio: string
}

export const RequestCreateDefault: RequestCreateI = {
  fechacre: "",
  obser: "",
  nodoccliente: "",
  idcat: "",
  idest: "",
  prio: ""
}

export interface ModifyRequestI {
  prio?: number | string;
  obser?: string;
  diag?: string;
  nodoctecnico?: string;
  idcat?: number | string;
  idest?: number | string;
}

export interface TableRequestI {
  idsol: string | number;
  fechacre: string;
  prio?: string;
  pnom: string;
  pape: string;
  nodoctecnico?: string;
  idcat: string;
  idest: string;
  fechaci?: string
}

export const TableRequestDefautl: TableRequestI = {
  idsol: "",
  fechacre: "",
  pnom: "",
  pape: "",
  idcat: "",
  idest: "",
}

export interface RequestGlobalI {
  allRequest: TableRequestI[]
}

export const RequestGlobalDefault: RequestGlobalI = {
  allRequest: []
}

export interface CategoriesI {
  idcat: number | string;
  nombre: string
}

export const CategoriesDefault: CategoriesI = {
  idcat: "",
  nombre: ""
}

export interface RequestFormGlobalI {
  categories: CategoriesI[];
  onSubmit: () => void;
  handleInputChange: () => void
}

export const RequestFormGlobalDefault: RequestFormGlobalI = {
  categories: [],
  onSubmit: () => {},
  handleInputChange: () => {}
}

export interface DetailsRequestI {
  idsol: number | string;
  fechacre: string;
  idcat: string;
  obser: string;
  pnom: string;
  snom: string;
  pape: string;
  sape: string;
  prio: string;
}

export const DetailsRequestDefault: DetailsRequestI = {
  idsol: "",
  fechacre: "",
  idcat: "",
  obser: "",
  pnom: "",
  snom: "",
  pape: "",
  sape: "",
  prio: ""
}

export interface DetailsRequestGlobalI {
  detailsRequest: DetailsRequestI[]
}

export const DetailsRequestGlobalDefault: DetailsRequestGlobalI = {
  detailsRequest: []
}

export interface UpdateRequestSupervisorI {
  nodoctecnico: string;
  prio: string;
  idest: number | string
}

export const UpdateRequestSupervisorDefault: UpdateRequestSupervisorI = {
  nodoctecnico: "",
  prio: "",
  idest: ""
}

export interface UpdateRequestTechnicalI {
  diag: string;
  idest: number | string;
  fechaci?: string
}

export const UpdateRequestTechnicalDefault: UpdateRequestTechnicalI = {
  diag: "",
  idest: ""
}

export interface DetailsRequestI2 {
  idsol: number | string;
  fechacre: string;
  idcat: string;
  obser: string;
  idest?: string;
  pnomcliente: string;
  snomcliente?: string;
  papecliente: string;
  sapecliente?: string;
  prio: string;
  pnomtecnico?: string;
  snomtecnico?: string;
  papetecnico?: string;
  sapetecnico?: string;
  diag?: string;
  fechaci?: string;
}

export const DetailsRequestDefault2: DetailsRequestI2 = {
  idsol: "",
  fechacre: "",
  idcat: "",
  obser: "",
  pnomcliente: "",
  papecliente: "",
  prio: ""
}