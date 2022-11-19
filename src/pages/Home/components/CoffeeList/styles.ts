import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  padding-bottom: 9.8125rem;

  margin: 0 1rem;
`

export const GridList = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;

  display: grid;
  grid-template-rows: 1fr;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const TitleListCoffe = styled.h4`
  font-family: 'Baloo 2', monospace;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.color['base-subtitle']};

  margin-bottom: 2.125rem;
`
