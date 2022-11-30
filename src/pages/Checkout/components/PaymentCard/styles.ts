import styled from 'styled-components'

export const PaymentContainer = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.color['base-card']};
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem;

  > div:last-child {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  @media (max-width: 550px) {
    padding: 1rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    flex: 1;
  }

  @media (max-width: 425px) {
    flex-direction: column;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`
