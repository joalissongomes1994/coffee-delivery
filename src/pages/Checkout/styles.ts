import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding-bottom: 3rem;

  .wrapper-address {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    max-width: 40rem;
    flex: 2;
  }

  .wrapper-coffee-card-selected {
    max-width: 40rem;
    flex: 1;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrapper-address {
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .wrapper-coffee-card-selected {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.color.dange};
`
