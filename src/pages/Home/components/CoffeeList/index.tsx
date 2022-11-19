import { CatalogCard } from '../CatalogCard'
import { CoffeeListContainer, GridList, TitleListCoffe } from './styles'

import { coffeesList } from '../../../../coffeeList'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <TitleListCoffe>Nossos Cafés</TitleListCoffe>

      <GridList>
        {coffeesList.map((item) => (
          <CatalogCard key={item.id} data={item} />
        ))}
      </GridList>
    </CoffeeListContainer>
  )
}
