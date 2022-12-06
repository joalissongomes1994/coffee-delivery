import styled from 'styled-components'

export const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Subtitle = styled.h4`
  font-family: 'Baloo 2', monospace;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.6;
  color: ${(props) => props.theme.color['base-subtitle']};

  padding-bottom: 1rem;
`

export const Card = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.color['base-card']};
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem;

  @media (max-width: 570px) {
    padding: 1rem;
  }
`

export const InputWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'houseNumber complement complement'
    'district city federative-unit';

  grid-template-columns: 0.5fr 1fr 10%;
  gap: 1rem;

  @media (max-width: 620px) {
    grid-template-areas:
      'cep . .'
      'street street street'
      'houseNumber complement complement'
      'district district district'
      'city city federative-unit';

    grid-template-columns: 8rem 1fr 4rem;
  }

  .cep,
  .street,
  .houseNumber,
  .district,
  .city,
  .federative-unit {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .cep {
    grid-area: cep;
  }
  .street {
    grid-area: street;
  }
  .houseNumber {
    grid-area: houseNumber;
  }
  .complement {
    grid-area: complement;
  }
  .district {
    grid-area: district;
  }
  .city {
    grid-area: city;
  }
  .federative-unit {
    grid-area: federative-unit;
  }
`
