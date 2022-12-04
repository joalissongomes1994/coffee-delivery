import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { coffeesList, TCoffeeListData } from '../../../../coffeeList'
import { CounterButton } from '../../../../components/CounterButton'
import { IconButton } from '../../../../components/IconButton'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { formatPrice } from '../../../../util/format'
import { errorMessage, successMessage } from '../../../../util/toastMessages'
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
    const hasThisAmountStock = coffeesList.findIndex(
      (coffeeItem) => coffeeItem.id === id && coffeeItem.amount > amount,
    )

    if (hasThisAmountStock < 0)
      return errorMessage(
        `Só possuimos ${amount} unidades deste café no estoque`,
      )

    coffeesAmountIncrement(id, amount)
  }

  function handleCoffeesAmountDecrement() {
    coffeesAmountDecrement(id, amount)
  }

  function handleRomoveItem() {
    removeCoffee(id)
    successMessage('Item removido do carrinho com sucesso!')
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
