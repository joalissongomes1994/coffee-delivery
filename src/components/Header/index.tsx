import { CartContainer, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <div className="cards-header-area">
        <LocationContainer>
          <MapPin weight="fill" size={22} /> Coruripe, AL
        </LocationContainer>

        <CartContainer>
          <ShoppingCart weight="fill" size={22} />
          <span className="cart-items-amount">3</span>
        </CartContainer>
      </div>
    </HeaderContainer>
  )
}
