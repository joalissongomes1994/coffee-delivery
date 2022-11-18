import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .cards-header-area {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const BaseButtonHeader = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
`

export const LocationContainer = styled(BaseButtonHeader)`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color['purple-light']};

  svg {
    color: ${(props) => props.theme.color.purple};
  }
`

export const CartContainer = styled(BaseButtonHeader)`
  background-color: ${(props) => props.theme.color['yellow-light']};
  cursor: pointer;
  position: relative;

  .cart-items-amount {
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    top: -0.5rem;
    font-size: 0.75rem;
    border-radius: 50%;
    color: ${(props) => props.theme.color.white};
    font-weight: bold;
    background-color: ${(props) => props.theme.color['yellow-dark']};

    text-align: center;
    letter-spacing: -0.06em;
    line-height: 1.6;
  }

  svg {
    color: ${(props) => props.theme.color['yellow-dark']};
  }
`
