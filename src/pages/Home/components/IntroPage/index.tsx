import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  IntroItemsContainer,
  IntroPageContainer,
  Item,
  Subtitle,
  Title,
} from './styles'
import coffeeDeliveryIntroImage from '../../../../assets/coffee-delivery-intro.png'

export function IntroPage() {
  return (
    <IntroPageContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <IntroItemsContainer>
          <div>
            <Item colorIcon="white" backgroundIcon="yellow-dark">
              <ShoppingCart weight="fill" />
              Compra simples e segura
            </Item>

            <Item colorIcon="white" backgroundIcon="yellow">
              <Timer weight="fill" />
              Entrega rápida e rastreada
            </Item>
          </div>

          <div>
            <Item colorIcon="white" backgroundIcon="base-text">
              <Package weight="fill" />
              Embalagem mantém o café intacto
            </Item>

            <Item colorIcon="white" backgroundIcon="purple">
              <Coffee weight="fill" /> O café chega fresquinho até você
            </Item>
          </div>
        </IntroItemsContainer>
      </div>

      <img src={coffeeDeliveryIntroImage} alt="" />
    </IntroPageContainer>
  )
}
