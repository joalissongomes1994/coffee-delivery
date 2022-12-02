import axios from 'axios'
import { MapPinLine } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../..'
import { DescriptionCard } from '../../../../components/DescriptionCard'
import { Input } from '../../../../components/Input'
import { Select } from '../../../../components/Select'
import { ErrorMessage } from '../../styles'
import { AddressContainer, InputWrapper, Card, Subtitle } from './styles'

const federativeUnit = [
  { AC: 'Acre' },
  { AL: 'Alagoas' },
  { AP: 'Amapá' },
  { AM: 'Amazonas' },
  { BA: 'Bahia' },
  { CE: 'Ceará' },
  { DF: 'Distrito Federal' },
  { ES: 'Espírito Santo' },
  { GO: 'Goías' },
  { MA: 'Maranhão' },
  { MT: 'Mato Grosso' },
  { MS: 'Mato Grosso do Sul' },
  { MG: 'Minas Gerais' },
  { PA: 'Pará' },
  { PB: 'Paraíba' },
  { PR: 'Paraná' },
  { PE: 'Pernambuco' },
  { PI: 'Piauí' },
  { RJ: 'Rio de Janeiro' },
  { RN: 'Rio Grande do Norte' },
  { RS: 'Rio Grande do Sul' },
  { RO: 'Rondônia' },
  { RR: 'Roraíma' },
  { SC: 'Santa Catarina' },
  { SP: 'São Paulo' },
  { SE: 'Sergipe' },
  { TO: 'Tocantins' },
]

interface Data {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
}

export function AddressCard() {
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>()

  async function getViaCep(cep: string) {
    await axios
      .get<Data>(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        const { data } = res

        setValue('address.city', data.localidade)
        setValue('address.district', data.bairro)
        setValue('address.federativeUnit', data.uf)
        setValue('address.street', data.logradouro)
      })
  }

  return (
    <AddressContainer>
      <Subtitle>Complete seu pedido</Subtitle>

      <Card>
        <DescriptionCard
          iconColor="yellow-dark"
          iconComponent={<MapPinLine weight="regular" />}
          title="Endereço de Entrega"
          descriptionText="Informe o endereço onde deseja receber seu pedido"
        />

        <InputWrapper>
          <div className="cep">
            <Input
              {...register('address.cep', {
                onChange(event: ChangeEvent<HTMLInputElement>) {
                  const isValidCep = event.target.value.length
                  isValidCep > 7 && getViaCep(event.target.value)
                },
              })}
              name="address.cep"
              placeholder="CEP"
              type="text"
            />
            <ErrorMessage>{errors.address?.cep?.message}</ErrorMessage>
          </div>

          <div className="street">
            <Input
              {...register('address.street')}
              name="address.street"
              placeholder="Rua"
              type="text"
            />
            <ErrorMessage>{errors.address?.street?.message}</ErrorMessage>
          </div>

          <div className="houseNumber">
            <Input
              {...register('address.houseNumber')}
              name="address.houseNumber"
              placeholder="Número"
              type="text"
            />
            <ErrorMessage>{errors.address?.houseNumber?.message}</ErrorMessage>
          </div>

          <Input
            {...register('address.complement')}
            className="complement"
            name="address.complement"
            placeholder="Complemento"
            type="text"
          />

          <div className="district">
            <Input
              {...register('address.district')}
              name="address.district"
              placeholder="Bairro"
              type="text"
            />
            <ErrorMessage>{errors.address?.district?.message}</ErrorMessage>
          </div>

          <div className="city">
            <Input
              {...register('address.city')}
              name="address.city"
              placeholder="Cidade"
              type="text"
            />
            <ErrorMessage>{errors.address?.city?.message}</ErrorMessage>
          </div>

          <div className="federative-unit">
            <Select
              {...register('address.federativeUnit')}
              name="address.federativeUnit"
              placeholder="UF"
            >
              {federativeUnit.map((item) => {
                const federativeUnitSelected = Object.keys(item).toString()
                return (
                  <option
                    key={federativeUnitSelected}
                    value={federativeUnitSelected}
                  >
                    {federativeUnitSelected}
                  </option>
                )
              })}
            </Select>
            <ErrorMessage>
              {errors.address?.federativeUnit?.message}
            </ErrorMessage>
          </div>
        </InputWrapper>
      </Card>
    </AddressContainer>
  )
}
