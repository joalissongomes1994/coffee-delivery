import {
  ReactNode,
  FC,
  ButtonHTMLAttributes,
  forwardRef,
  RefObject,
} from 'react'
import { TypeColors } from '../../@types/colors'
import { IconButtonContainer } from './styles'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconButton: ReactNode
  iconColor: TypeColors
  backgroundColor: TypeColors
  textColor: TypeColors
  hoverColor: TypeColors
  selectedColor: TypeColors
  buttonText: string
  selected?: boolean
  size?: 'small' | 'large'
}

type Ref =
  | ((instance: HTMLButtonElement | null) => void)
  | RefObject<HTMLButtonElement>
  | null
  | undefined

export const IconButton: FC<IconButtonProps> = forwardRef(function IconButton(
  { selected = false, buttonText, iconButton, ...props },
  ref: Ref,
) {
  return (
    <IconButtonContainer ref={ref} type="button" selected={selected} {...props}>
      {iconButton}

      <span>{String(buttonText).toUpperCase()}</span>
    </IconButtonContainer>
  )
})
