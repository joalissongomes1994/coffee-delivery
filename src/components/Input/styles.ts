import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme.color['base-button']};
  border-radius: 6px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.color['base-input']};
  color: ${(props) => props.theme.color['base-text']};

  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  &::placeholder {
    color: ${(props) => props.theme.color['base-label']};
  }
`
