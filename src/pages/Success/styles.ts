import styled from 'styled-components'
import { TypeColors } from '../../@types/colors'

interface OrderInfoProps {
  colorIcon: TypeColors
  backgroundIcon: TypeColors
}

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 6.375rem;
  margin-top: 5rem;

  > div {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2' monospace;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme.color['yellow-dark']};
  }

  .subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 786px) {
    img {
      display: none;
    }
  }
`
export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  margin-top: 2.5rem;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  background: linear-gradient(
      102.89deg,
      ${(props) => props.theme.color.background} 2.61%,
      ${(props) => props.theme.color.background} 98.76%
    ),
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  div + div {
    padding-top: 2rem;
  }
`

export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  div {
    span {
      display: block;
    }
  }

  svg {
    color: ${(props) => props.theme.color[props.colorIcon]};
    background-color: ${(props) => props.theme.color[props.backgroundIcon]};
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    padding: 0.5rem;
  }
`
