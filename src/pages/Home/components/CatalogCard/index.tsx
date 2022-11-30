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
import { TCoffeeListData } from '../../../../coffeeList'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CounterButton } from '../../../../components/CounterButton'

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

  function handleAddCoffee(coffee: TCoffeeListData) {
    addCoffee(coffee, coffeeAmount)
  }

  function handleCoffeesAmountIncrement() {
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
