import { OrderInfo, OrderInfoWrapper, SuccessContainer } from './styles'
import illustrationCoffeeDelivery from '../../assets/illustration-coffee-delivery.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Success() {
  const { checkout } = useContext(CoffeeContext)
  const [paymentSelected, setPaymentSelected] = useState<string>('')

  useEffect(() => {
    switch (checkout?.paymentType) {
      case 'CREDIT':
        setPaymentSelected('Cartão de crédito')
        break
      case 'DEBIT':
        setPaymentSelected('Cartão de dédito')
        break
      case 'MONEY':
        setPaymentSelected('Dinheiro')
        break
      default:
        setPaymentSelected('')
    }
  }, [checkout?.paymentType])

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>

        <OrderInfoWrapper>
          <OrderInfo colorIcon="white" backgroundIcon="purple">
            <MapPin weight="fill" />
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {checkout?.address.street}, {checkout?.address.houseNumber}
                </strong>
              </span>

              <span>
                {`${checkout?.address.district}, ${checkout?.address.city}, ${checkout?.address.federativeUnit}`}
              </span>
            </div>
          </OrderInfo>

          <OrderInfo colorIcon="white" backgroundIcon="yellow">
            <Timer weight="fill" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </OrderInfo>

          <OrderInfo colorIcon="white" backgroundIcon="yellow-dark">
            <CurrencyDollar weight="regular" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{paymentSelected}</strong>
              </span>
            </div>
          </OrderInfo>
        </OrderInfoWrapper>
      </div>

      <img src={illustrationCoffeeDelivery} alt="" />
    </SuccessContainer>
  )
}
