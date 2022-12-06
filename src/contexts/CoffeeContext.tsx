import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { TCoffeeListData } from '../coffeeList'
import { CheckoutFormData } from '../pages/Checkout'
import {
  createCheckoutAction,
  addCoffeeAction,
  resetCoffeeAction,
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
  checkout: CheckoutFormData | null
  createCheckout: (checkoutFormData: CheckoutFormData) => void
  addCoffee: (coffee: TCoffeeListData, coffeeAmount: number) => void
  resetCoffee: () => void
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
      checkout: null,
    },
    () => {
      const stateStoredCheckoutAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-state-1.0.0',
      )

      if (stateStoredCheckoutAsJSON)
        return JSON.parse(stateStoredCheckoutAsJSON)

      return { coffees: [], coffeeId: null, checkout: null }
    },
  )

  const { coffeeId, coffees, checkout } = coffeeState

  useEffect(() => {
    const stateCheckoutJSON = JSON.stringify(coffeeState)

    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      stateCheckoutJSON,
    )
  }, [coffeeState])

  function createCheckout(checkoutFormData: CheckoutFormData) {
    dispatch(createCheckoutAction(checkoutFormData))
  }

  function addCoffee(coffee: TCoffeeListData, coffeeAmount: number) {
    dispatch(addCoffeeAction(coffee, coffeeAmount))
  }

  function resetCoffee() {
    dispatch(resetCoffeeAction())
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
        checkout,
        addCoffee,
        resetCoffee,
        removeCoffee,
        coffeesAmountIncrement,
        coffeesAmountDecrement,
        createCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
