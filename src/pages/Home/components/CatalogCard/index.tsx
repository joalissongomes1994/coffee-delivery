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
import { useNavigate } from 'react-router-dom'
import { CounterButton } from '../../../../components/CounterButton'

interface CatalogCardProps {
  data: TCoffeeListData
}

export function CatalogCard({ data }: CatalogCardProps) {
  const navigate = useNavigate()

  function handleNavigationToCheckout() {
    navigate('/checkout')
  }

  return (
    <CatalogCardContainer>
      <img src={data.image} alt={data.title} title={data.title} />

      <LabelContainer>
        {data.labels.map((label) => (
          <label key={label.name}>{String(label.name).toUpperCase()}</label>
        ))}
      </LabelContainer>

      <Title>{data.title}</Title>
      <Description>{data.description}</Description>

      <FooterCard>
        <Price>{formatPrice(data.price)}</Price>

        <div>
          <CounterButton
            countItem={4}
            iconInputMinus={<Minus weight="bold" />}
            iconInputPlus={<Plus weight="bold" />}
            size="large"
          />

          <ButtonCart type="button" onClick={handleNavigationToCheckout}>
            <ShoppingCart weight="fill" />
          </ButtonCart>
        </div>
      </FooterCard>
    </CatalogCardContainer>
  )
}
