import { Minus, Plus } from 'phosphor-react'
import { ReactNode } from 'react'
import { CounterContainer } from './styles'

export interface CounterButtonProps {
  iconInputPlus: ReactNode
  iconInputMinus: ReactNode
  countItem: number
  size?: 'small' | 'large'
  itemIncrement: () => void
  itemDecrement: () => void
}

export function CounterButton({
  countItem,
  size = 'small',
  itemIncrement,
  itemDecrement,
  ...props
}: CounterButtonProps) {
  return (
    <CounterContainer size={size} {...props}>
      <button type="button" onClick={itemIncrement}>
        <Plus weight="bold" />
      </button>
      <span>{countItem}</span>
      <button type="button" disabled={countItem < 2} onClick={itemDecrement}>
        <Minus weight="bold" />
      </button>
    </CounterContainer>
  )
}
