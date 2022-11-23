import { Minus, Plus } from 'phosphor-react'
import { ReactNode } from 'react'
import { CounterContainer } from './styles'

export interface CounterInputProps {
  iconInputPlus: ReactNode
  iconInputMinus: ReactNode
  countItem: number
  size?: 'small' | 'large'
}

export function CounterInput({
  countItem,
  size = 'small',
  ...props
}: CounterInputProps) {
  return (
    <CounterContainer size={size} {...props}>
      <button>
        <Plus weight="bold" />
      </button>
      <span>{countItem}</span>
      <button>
        <Minus weight="bold" />
      </button>
    </CounterContainer>
  )
}
