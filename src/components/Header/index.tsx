import { CartButton, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import axios from 'axios'

export function Header() {
  const { coffees } = useContext(CoffeeContext)
  const coffeeSize = coffees.length
  const [currentLocation, setCurrentLocation] = useState<string>('')

  const navigate = useNavigate()

  function handleNavigationToCheckout() {
    if (window.location.pathname !== '/checkout') navigate('/checkout')
  }

  const getLocation = useCallback(async () => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    await axios.get(`https://geolocation-db.com/json/`).then((res) => {
      const data = res.data

      setCurrentLocation(`${data.city ?? ''}, ${data.state ?? ''}`)
    })
  }, [])

  useEffect(() => {
    getLocation()
  }, [getLocation])

  return (
    <HeaderContainer hasItem>
      <div>
        <Link to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </Link>
      </div>

      <div className="cards-header-area">
        {currentLocation && (
          <LocationContainer>
            <MapPin weight="fill" size={22} /> {currentLocation}
          </LocationContainer>
        )}

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
