import styled from 'styled-components'

export const SelectContainer = styled.select`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme.color['base-button']};
  border-radius: 6px;
  background-color: ${(props) => props.theme.color['base-input']};
  color: ${(props) => props.theme.color['base-text']};

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;

  text-align: center;
  cursor: pointer;

  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;

  span {
    background-color: red;
  }
`
