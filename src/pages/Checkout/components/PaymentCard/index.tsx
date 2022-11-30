import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../..'
import { DescriptionCard } from '../../../../components/DescriptionCard'
import { IconButton } from '../../../../components/IconButton'
import { ErrorMessage } from '../../styles'
import { ButtonWrapper, PaymentContainer } from './styles'

type PaymentTypes = 'CREDIT' | 'DEBIT' | 'MONEY'

export function PaymentCard() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CheckoutFormData>()

  const paymentType = watch('paymentType')

  function handlePaymentType(type: PaymentTypes) {
    setValue('paymentType', type)
  }

  return (
    <PaymentContainer>
      <DescriptionCard
        iconColor="purple"
        iconComponent={<CurrencyDollar weight="regular" />}
        title="Pagamento"
        descriptionText="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <ButtonWrapper>
        <IconButton
          buttonText="Cartão de Crédito"
          iconButton={<CreditCard weight="regular" />}
          iconColor="purple"
          backgroundColor="base-button"
          textColor="base-text"
          hoverColor="base-hover"
          selectedColor="purple-light"
          selected={paymentType === 'CREDIT'}
          onClick={() => handlePaymentType('CREDIT')}
        />

        <IconButton
          buttonText="Cartão de Débito"
          iconButton={<Bank weight="regular" />}
          iconColor="purple"
          backgroundColor="base-button"
          textColor="base-text"
          hoverColor="base-hover"
          selectedColor="purple-light"
          selected={paymentType === 'DEBIT'}
          onClick={() => handlePaymentType('DEBIT')}
        />

        <IconButton
          buttonText="Dinheiro"
          iconButton={<Money weight="regular" />}
          iconColor="purple"
          backgroundColor="base-button"
          textColor="base-text"
          hoverColor="base-hover"
          selectedColor="purple-light"
          selected={paymentType === 'MONEY'}
          onClick={() => handlePaymentType('MONEY')}
        />
      </ButtonWrapper>

      {!paymentType && (
        <div>
          <ErrorMessage>{errors.paymentType?.message}</ErrorMessage>
        </div>
      )}
    </PaymentContainer>
  )
}
