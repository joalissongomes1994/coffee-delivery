import { toast } from 'react-toastify'

const props = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
} as const

export function successMessage(message: string) {
  toast.success(message, props)
}

export function errorMessage(message: string) {
  toast.error(message, props)
}

export function warnMessage(message: string) {
  toast.warn(message, props)
}
