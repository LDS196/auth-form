export type ResponseType = {
  token: string
  type: 'bearer'
}
export type BodyLogin = {
  email: string
  password: string
}

export type BodyRegister = {
  email: string
  password: string
}
export type ProfileResponse = {
  email: string
  id: string
}
