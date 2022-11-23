import styled from 'styled-components'
import { TypeColors } from '../../@types/colors'

interface DescriptionWrapperProps {
  iconColor: TypeColors
}

export const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  display: flex;
  padding-bottom: 2rem;
  gap: 1rem;

  > svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme.color[props.iconColor]};
  }

  > div > label {
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.color['base-subtitle']};
  }

  > div > span {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['base-text']};
  }
`
