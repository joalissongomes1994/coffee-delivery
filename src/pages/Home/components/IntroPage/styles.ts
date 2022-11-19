import styled from 'styled-components'

type TypeItemVariants =
  | 'base-text'
  | 'purple'
  | 'yellow'
  | 'yellow-dark'
  | 'white'

interface ItemProps {
  colorIcon: TypeItemVariants
  backgroundIcon: TypeItemVariants
}

export const IntroPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 0 6.75rem;

  > div {
    max-width: 36.75rem;
  }

  @media (max-width: 768px) {
    justify-content: center;

    img {
      display: none;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', monospace;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.color['base-title']};
  margin-bottom: 1rem;

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${(props) => props.theme.color['base-subtitle']};
  margin-bottom: 4.125rem;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`

export const IntroItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 590px) {
    flex-direction: column;

    div + div {
      margin-top: 1rem;
    }
  }
`

export const Item = styled.span<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & + & {
    margin-top: 1rem;
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
