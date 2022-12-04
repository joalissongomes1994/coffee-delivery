import {
  ButtonCart,
  CatalogCardContainer,
  Description,
  FooterCard,
  LabelContainer,
  Price,
  Title,
} from './styles'

import { formatPrice } from '../../../../util/format'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { coffeesList, TCoffeeListData } from '../../../../coffeeList'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CounterButton } from '../../../../components/CounterButton'
import {
  errorMessage,
  successMessage,
  warnMessage,
} from '../../../../util/toastMessages'

interface CatalogCardProps {
  coffee: TCoffeeListData
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  const { addCoffee, coffees, coffeesAmountIncrement, coffeesAmountDecrement } =
    useContext(CoffeeContext)

  const coffeeSelected = coffees.findIndex((item) => item.id === coffee.id)

  const [coffeeAmount, setCoffeeAmount] = useState<number>(() => {
    if (coffeeSelected < 0) return 1

    return coffees[coffeeSelected].amount
  })

  useEffect(() => {
    setCoffeeAmount((state) => {
      if (coffeeSelected < 0) return state

      return coffees[coffeeSelected].amount
    })
  }, [coffeeSelected, coffees])

  function handleAddCoffee(coffeeSelected: TCoffeeListData) {
    const hasThisCoffee = coffees.findIndex(
      (coffee) => coffee.id === coffeeSelected.id,
    )
    const hasThisAmountStock = coffeesList.findIndex(
      (coffee) =>
        coffee.id === coffeeSelected.id && coffee.amount >= coffeeAmount,
    )

    if (hasThisAmountStock < 0)
      return errorMessage('Quantidade insuficiente no estoque')

    if (hasThisCoffee < 0) {
      addCoffee(coffee, coffeeAmount)
      successMessage('Item adicionado ao carrinho com sucesso!')
    } else {
      warnMessage('Este item já foi adicionado ao carrinho!')
    }
  }

  function handleCoffeesAmountIncrement() {
    const hasThisAmountStock = coffeesList.findIndex(
      (coffeeItem) =>
        coffeeItem.id === coffee.id && coffee.amount > coffeeAmount,
    )

    if (hasThisAmountStock < 0)
      return errorMessage(
        `Só possuimos ${coffee.amount} unidades deste café no estoque`,
      )

    if (coffeeSelected < 0) return setCoffeeAmount((state) => state + 1)

    coffeesAmountIncrement(coffee.id, coffeeAmount)
  }

  function handleCoffeesAmountDecrement() {
    if (coffeeSelected < 0) return setCoffeeAmount((state) => state - 1)

    coffeesAmountDecrement(coffee.id, coffeeAmount)
  }

  return (
    <CatalogCardContainer>
      <img src={coffee.image} alt={coffee.title} title={coffee.title} />

      <LabelContainer>
        {coffee.labels.map((label) => (
          <label key={label.name}>{String(label.name).toUpperCase()}</label>
        ))}
      </LabelContainer>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <FooterCard>
        <Price>{formatPrice(coffee.price)}</Price>

        <div>
          <CounterButton
            countItem={coffeeAmount}
            iconInputMinus={<Minus weight="bold" />}
            iconInputPlus={<Plus weight="bold" />}
            size="large"
            itemIncrement={handleCoffeesAmountIncrement}
            itemDecrement={handleCoffeesAmountDecrement}
          />

          <ButtonCart type="button" onClick={() => handleAddCoffee(coffee)}>
            <ShoppingCart weight="fill" />
          </ButtonCart>
        </div>
      </FooterCard>
    </CatalogCardContainer>
  )
}
