import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressCard } from './components/AddressCard'
import { PaymentCard } from './components/PaymentCard'
import { CoffeeCard } from './components/CoffeeCard'
import { CheckoutContainer } from './styles'

const checkoutFormValidationSchema = zod.object({
  address: zod.object({
    cep: zod.string().min(1, 'Campo obrigatório'),
    street: zod.string().min(1, 'Campo obrigatório'),
    houseNumber: zod.string().min(1, 'Campo obrigatório'),
    complement: zod.string().optional(),
    district: zod.string().min(1, 'Campo obrigatório'),
    city: zod.string().min(1, 'Campo obrigatório'),
    federativeUnit: zod.string().min(1, 'Campo obrigatório'),
  }),
  paymentType: zod.enum(['CREDIT', 'DEBIT', 'MONEY'], {
    required_error: 'Selecione a forma de pagamento',
  }),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      address: {
        cep: '',
        street: '',
        houseNumber: '',
        complement: '',
        district: '',
        city: '',
        federativeUnit: '',
      },
      paymentType: undefined,
    },
  })

  const { handleSubmit } = checkoutForm

  function handleCheckout(data: any) {
    console.log(data)
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleCheckout)}>
        <div className="wrapper-address">
          <AddressCard />
          <PaymentCard />
        </div>
        <div className="wrapper-coffee-card-selected ">
          <CoffeeCard />
        </div>
      </CheckoutContainer>
    </FormProvider>
  )
}
