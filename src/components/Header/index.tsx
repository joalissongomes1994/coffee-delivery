import {
  BackButton,
  CartButton,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { CaretLeft, MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffees } = useContext(CoffeeContext)
  const coffeeSize = coffees.length

  const navigate = useNavigate()
  const isPathHome = window.location.pathname === '/'

  function handleNavigationToCheckout() {
    if (window.location.pathname !== '/checkout') navigate('/checkout')
  }

  function handleNavigationToGoBack() {
    navigate(-1)
  }

  return (
    <HeaderContainer hasItem>
      <div>
        {!isPathHome && (
          <BackButton
            title="voltar"
            type="button"
            onClick={handleNavigationToGoBack}
          >
            <CaretLeft weight="light" className="button-go-back" />
          </BackButton>
        )}
        <img src={logoCoffeeDelivery} alt="" />
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
