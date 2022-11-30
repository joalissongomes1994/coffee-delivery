import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { TCoffeeListData } from '../../../../coffeeList'
import { CounterButton } from '../../../../components/CounterButton'
import { IconButton } from '../../../../components/IconButton'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { formatPrice } from '../../../../util/format'
import {
  Container,
  WrapperCounter,
  WrapperItem,
  WrapperLeft,
  WrapperRight,
} from './styles'

interface CoffeeSelectedProps {
  coffeeData: TCoffeeListData
}

export function CoffeeSelected({
  coffeeData: { id, title, amount, price },
}: CoffeeSelectedProps) {
  const { coffeesAmountIncrement, coffeesAmountDecrement, removeCoffee } =
    useContext(CoffeeContext)

  function handleCoffeesAmountIncrement() {
    coffeesAmountIncrement(id, amount)
  }

  function handleCoffeesAmountDecrement() {
    coffeesAmountDecrement(id, amount)
  }

  function handleRomoveItem() {
    removeCoffee(id)
  }

  return (
    <Container>
      <WrapperLeft>
        <img src="/src/assets/coffees/expresso-tradicional.png" alt="" />

        <WrapperItem>
          <span>{title}</span>

          <WrapperCounter>
            <CounterButton
              countItem={amount}
              iconInputMinus={<Minus weight="bold" />}
              iconInputPlus={<Plus weight="bold" />}
              itemIncrement={handleCoffeesAmountIncrement}
              itemDecrement={handleCoffeesAmountDecrement}
            />

            <IconButton
              buttonText="Remover"
              iconButton={<Trash weight="regular" />}
              iconColor="purple"
              backgroundColor="base-button"
              textColor="base-text"
              hoverColor="base-hover"
              selectedColor="purple-light"
              size="small"
              onClick={handleRomoveItem}
            />
          </WrapperCounter>
        </WrapperItem>
      </WrapperLeft>

      <WrapperRight>
        <span>{formatPrice(price)}</span>
      </WrapperRight>
    </Container>
  )
}
