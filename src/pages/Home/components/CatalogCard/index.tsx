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
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CounterButton } from '../../../../components/CounterButton'

interface CatalogCardProps {
  coffee: TCoffeeListData
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  const { addCoffee } = useContext(CoffeeContext)

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function handleAddCoffee(coffee: TCoffeeListData) {
    addCoffee(coffee, coffeeAmount)
  }

  function handleCoffeesAmountIncrement() {
    setCoffeeAmount((state) => state + 1)
  }

  function handleCoffeesAmountDecrement() {
    setCoffeeAmount((state) => state - 1)
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
