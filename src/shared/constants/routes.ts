export const MAIN_PAGE = '/'

export enum Pages {
  Login = 'login',
  Register = 'register',
  Profile = 'profile',
}

export const LOGIN_PAGE = `${MAIN_PAGE}${Pages.Login}`
export const REGISTER_PAGE = `${MAIN_PAGE}${Pages.Register}`
export const PROFILE_PAGE = `${MAIN_PAGE}${Pages.Profile}`
