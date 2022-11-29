import styled from 'styled-components'

interface HeaderContainerProps {
  hasItem: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .cards-header-area {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .button-go-back {
      font-size: 1.6rem;
      color: ${(props) => props.theme.color['base-label']};
    }
  }

  @media (max-width: 70.5rem) {
    padding-right: ${(props) => (props.hasItem ? `0.5rem` : 0)};
  }
`

export const BackButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const BaseButtonHeader = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
`

export const LocationContainer = styled(BaseButtonHeader)`
  background-color: ${(props) => props.theme.color['purple-light']};

  svg {
    color: ${(props) => props.theme.color.purple};
  }
`

export const CartButton = styled(BaseButtonHeader)`
  background-color: ${(props) => props.theme.color['yellow-light']};
  cursor: pointer;
  position: relative;

  span {
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

  &:disabled {
    cursor: not-allowed;
  }
`
