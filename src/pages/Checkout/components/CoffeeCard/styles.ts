import styled from 'styled-components'

export const Container = styled.div`
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
  background-color: ${(props) => props.theme.color['base-card']};
  width: 100%;
  border-radius: 6px 44px;
  padding: 2.5rem;

  @media (max-width: 570px) {
    padding: 1rem;
  }
`

export const TotalAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme.color['base-text']};
    }
  }

  .total-amount-bold {
    span {
      font-size: 1.25rem;
      line-height: 1.6;
      font-weight: 700;
      color: ${(props) => props.theme.color['base-subtitle']};
    }
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;

  background-color: ${(props) => props.theme.color.yellow};
  color: ${(props) => props.theme.color.white};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.6;
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.color['yellow-dark']};
  }
`
