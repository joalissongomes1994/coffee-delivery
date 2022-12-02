import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { TCoffeeListData } from '../coffeeList'
import {
  addCoffeeAction,
  coffeesAmountDecrementAction,
  coffeesAmountIncrementAction,
  removeCoffeeAction,
} from '../reducers/coffees/actions'
import { coffeesReducer } from '../reducers/coffees/reducer'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: TCoffeeListData[]
  coffeeId: string | null
  addCoffee: (coffee: TCoffeeListData, coffeeAmount: number) => void
  removeCoffee: (id: string) => void
  coffeesAmountIncrement: (id: string, amount: number) => void
  coffeesAmountDecrement: (id: string, amount: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
      coffeeId: null,
    },
    () => {
      const stateStoredCheckoutAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-state-1.0.0',
      )

      if (stateStoredCheckoutAsJSON)
        return JSON.parse(stateStoredCheckoutAsJSON)
    },
  )

  const { coffeeId, coffees } = coffeeState

  useEffect(() => {
    const stateCheckoutJSON = JSON.stringify(coffeeState)

    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      stateCheckoutJSON,
    )
  }, [coffeeState])

  function addCoffee(coffee: TCoffeeListData, coffeeAmount: number) {
    dispatch(addCoffeeAction(coffee, coffeeAmount))
  }

  function removeCoffee(id: string) {
    dispatch(removeCoffeeAction(id))
  }

  function coffeesAmountIncrement(id: string, coffeeAmount: number) {
    dispatch(coffeesAmountIncrementAction(id, coffeeAmount))
  }

  function coffeesAmountDecrement(id: string, coffeeAmount: number) {
    dispatch(coffeesAmountDecrementAction(id, coffeeAmount))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeId,
        coffees,
        addCoffee,
        removeCoffee,
        coffeesAmountIncrement,
        coffeesAmountDecrement,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
