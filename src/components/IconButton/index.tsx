import { ReactNode } from 'react'
import { TypeColors } from '../../@types/colors'
import { IconButtonContainer } from './styles'

export interface IconButtonProps {
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

export function IconButton({
  selected = false,
  buttonText,
  iconButton,
  ...props
}: IconButtonProps) {
  return (
    <IconButtonContainer type="button" selected={selected} {...props}>
      {iconButton}

      <span>{String(buttonText).toUpperCase()}</span>
    </IconButtonContainer>
  )
}
