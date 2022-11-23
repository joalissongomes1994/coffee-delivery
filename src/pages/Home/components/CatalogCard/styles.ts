import styled from 'styled-components'

export const CatalogCardContainer = styled.article`
  max-width: 16rem;
  background-color: ${(props) => props.theme.color['base-card']};
  border-radius: 6px 44px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: calc(-3.5rem + 1.25rem) 0 0.75rem;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;

  label {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    line-height: 1.6;
    font-weight: 700;
    background-color: ${(props) => props.theme.color['yellow-light']};
    color: ${(props) => props.theme.color['yellow-dark']};
  }
`

export const Title = styled.h4`
  font-family: 'Baloo 2', monospace;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`

export const Description = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  color: ${(props) => props.theme.color['base-label']};
  margin-bottom: 2rem;
`

export const FooterCard = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const Price = styled.span`
  font-size: 1.5rem;
  font-family: 'Baloo 2', monospace;
  font-weight: 800;
  line-height: 1.6;
`

export const ButtonCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.375rem;
  line-height: 1.6;

  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color['purple-dark']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.color.purple};
  }
`
