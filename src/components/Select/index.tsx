import { FC, forwardRef, RefObject, SelectHTMLAttributes } from 'react'
import { SelectContainer } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

type Ref =
  | ((instance: HTMLSelectElement | null) => void)
  | RefObject<HTMLSelectElement>
  | null
  | undefined

export const Select: FC<SelectProps> = forwardRef(function Select(
  props,
  ref: Ref,
) {
  return <SelectContainer {...props} ref={ref} />
})
