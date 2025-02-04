import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { STORAGE_KEYS } from '@shared/constants/api'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const checkAuth = () => localStorage.getItem(STORAGE_KEYS.Access_token) !== null