import { CartButton, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffees } = useContext(CoffeeContext)
  const coffeeSize = coffees.length

  const navigate = useNavigate()

  function handleNavigationToCheckout() {
    if (window.location.pathname !== '/checkout') navigate('/checkout')
  }

  return (
    <HeaderContainer hasItem>
      <div>
        <Link to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </Link>
      </div>

      <div className="cards-header-area">
        <LocationContainer>
          <MapPin weight="fill" size={22} /> Coruripe, AL
        </LocationContainer>

        <CartButton
          type="button"
          disabled={coffeeSize === 0}
          onClick={handleNavigationToCheckout}
        >
          <ShoppingCart weight="fill" size={22} />
          {coffeeSize > 0 && <span>{coffeeSize}</span>}
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
