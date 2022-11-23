import { FC, forwardRef, InputHTMLAttributes, RefObject } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

type Ref =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined

export const Input: FC<InputProps> = forwardRef(function Input(
  { ...props },
  ref: Ref,
) {
  return <InputContainer {...props} ref={ref} />
})
