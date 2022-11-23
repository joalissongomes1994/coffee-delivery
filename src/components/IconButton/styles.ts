import styled from 'styled-components'
import { IconButtonProps } from './index'

type IconButtonContainerProps = Omit<
  IconButtonProps,
  'iconButton' | 'buttonText'
>

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.65rem;
  height: 3.19rem;
  background: #e6e5e5;
  border-radius: 6px;
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.color[props.iconColor]}` : 0};
  cursor: pointer;
  flex: none;
  font-size: 0.75rem;
  color: ${(props) => props.theme.color[props.textColor]};
  background-color: ${(props) =>
    props.selected
      ? props.theme.color[props.selectedColor]
      : props.theme.color[props.backgroundColor]};
  transition: background-color 0.2s;

  max-height: ${(props) => (props.size === 'small' ? '2rem' : '100%')};

  svg {
    font-size: 1.375rem;
    line-height: 1.3;
    color: ${(props) => props.theme.color[props.iconColor]};
  }

  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme.color[props.selectedColor]
        : props.theme.color[props.hoverColor]};
  }
`
