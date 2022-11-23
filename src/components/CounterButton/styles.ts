import styled from 'styled-components'
import { CounterButtonProps } from '.'

type CounterContainerProps = Omit<CounterButtonProps, 'countItem'>

export const CounterContainer = styled.div<CounterContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
  height: 2.375rem;
  border-radius: 6px;
  gap: 4px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.color['base-button']};

  max-width: 4.5rem;
  max-height: ${(props) => (props.size === 'small' ? '2rem' : '100%')};

  span {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    color: ${(props) => props.theme.color['base-title']};
  }

  button {
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.color.purple};
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.color['purple-dark']};
    }
  }
`
