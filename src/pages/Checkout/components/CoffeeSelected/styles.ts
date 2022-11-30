import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color['base-button']};
  margin-bottom: 1.5rem;
`
export const WrapperLeft = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const WrapperRight = styled.div`
  display: flex;

  span {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme.color['base-text']};
  }
`

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const WrapperCounter = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 425px) {
    padding-top: 0.5rem;
    flex-direction: column;
  }
`
