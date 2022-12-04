import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { formatPrice } from '../../../../util/format'
import { CoffeeSelected } from '../CoffeeSelected'
import { Button, Card, Container, Subtitle, TotalAmount } from './styles'
import { useNavigate } from 'react-router-dom'

export function CoffeeCard() {
  const navigate = useNavigate()
  const { coffees } = useContext(CoffeeContext)
  const itemsTotalValue = coffees.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.amount
  }, 0)
  const shipping = 3.5
  const total = itemsTotalValue + shipping

  useEffect(() => {
    if (coffees.length === 0) {
      navigate('/')
    }
  }, [coffees.length, navigate])

  return (
    <Container>
      <Subtitle>Cafés selecionados</Subtitle>

      <Card>
        {coffees.map((coffee) => (
          <CoffeeSelected key={coffee.id} coffeeData={coffee} />
        ))}

        <TotalAmount>
          <div>
            <span>Total de items</span>
            <span>{formatPrice(itemsTotalValue)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <div className="total-amount-bold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </TotalAmount>

        <Button type="submit">Confirmar Pedido</Button>
      </Card>
    </Container>
  )
}
