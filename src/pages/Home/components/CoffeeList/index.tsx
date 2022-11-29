import { CatalogCard } from '../CatalogCard'
import { CoffeeListContainer, GridList, TitleListCoffe } from './styles'

import { coffeesList } from '../../../../coffeeList'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <TitleListCoffe>Nossos Cafés</TitleListCoffe>

      <GridList>
        {coffeesList.map((coffee) => (
          <CatalogCard key={coffee.id} coffee={coffee} />
        ))}
      </GridList>
    </CoffeeListContainer>
  )
}
