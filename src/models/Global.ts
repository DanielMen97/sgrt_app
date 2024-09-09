export interface GlobalDataI {
  request: LoginRequestI
}

export interface LoginRequestI {
  role: string;
  estado: boolean;
  token: string;
  refreshToken: string;
  expirationTime: string;
  nodoc: string
}

export const LoginRequestDefault: LoginRequestI = {
  role: "",
  estado: false,
  token: "",
  refreshToken: "",
  expirationTime: "",
  nodoc: ""
}

export interface UserDataI {
  correo: string;
  pass: string
}

export const UserDataDefault: UserDataI = {
  correo: "",
  pass: ""
}

export const GlobalDataDefault = {
  request: LoginRequestDefault
}

export interface LoginGlobalDataI {
  handleInputChange: any;
  onSubmit: any;
  loginRequest: LoginRequestI;
}

export const LoginGlobalDataDefault: LoginGlobalDataI = {
  handleInputChange: () => {},
  onSubmit: () => {},
  loginRequest: LoginRequestDefault,
}

export interface UserTableI {
    cedula: number | string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    celular: string;
    cargo: string;
    sede: string;
    estado: string;
}

export interface LayoutI {
  data: SidebarDataI[]
}

export interface SidebarDataI {
  rolid: string;
  id: number | string;
  label: string;
  icon: string;
  _to: string
}

export const SidebarDataDefault: SidebarDataI = {
  rolid: "",
  id: "",
  label: "",
  icon: "",
  _to: ""
}
  
export const LayoutDefault: LayoutI = {
  data: []
}

export interface UserDataCreateI {
    nodoc: string;
    pnom: string;
    snom?: string; 
    pape: string;
    sape?: string;
    celular?: string;
    iddoc: number | string;
    correo: string;
    idsede: number | string;
    pass?: string;
    idcargo: number | string;
    estado: boolean,
    role: string;
}

export const UserDataCreateDefault = {
  nodoc: "",
  pnom: "",
  pape: "",
  iddoc: "",
  correo: "",
  idsede: "",
  pass: "",
  idcargo: "",
  estado: true,
  role: "",
}

export interface SedesI {
  idsede: number | string;
  nombre: string
}

export const SedesDefault = {
  idsede: "",
  nombre: ""
}

export interface CargosI {
  idcargo: number | string;
  nombre: string
}

export const CargosDefault = {
  idcargo: "",
  nombre: ""
}

export interface RolesI {
  role: string
}

export const RolesDefault = {
  role: ""
}

export interface TiposdocI {
  iddoc: number | string;
  tipo: string
}

export const TiposdocDefault = {
  iddoc: "",
  tipo: ""
}

export interface UserDataListI {
  nodoc: string;
  pnom: string;
  snom?: string;
  pape: string;
  sape?: string;
  cargo: string;
  sede: string;
  correo: string;
  celular: string;
  estado: boolean;
}

export const UserDataListDefault = {
  nodoc: "",
  pnom: "",
  pape: "",
  cargo: "",
  sede: "",
  correo: "",
  celular: "",
  estado: false
}

export interface UserFormGlobalI {
  sedes: SedesI[];
  cargos: CargosI[];
  roles: RolesI[];
  tiposdoc: TiposdocI[]
  handleInputChange: any;
  onSubmit: any;
  userData?: UserDataCreateI;
  handleChange?: any;
}

export const UserFormGlobalDefault: UserFormGlobalI = {
  sedes: [],
  cargos: [],
  roles: [],
  tiposdoc: [],
  handleInputChange: () => {},
  onSubmit: () => {}
}

export interface ListTechI {
  nodoc: string;
  pnom: string;
  pape: string;
}

export const ListTechDefault: ListTechI = {
  nodoc: "",
  pnom: "",
  pape: "",
}

export interface UserGlobalI {
  allUsers: UserDataListI[]
}

export const UserGlobalDefault: UserGlobalI = {
  allUsers: []
}