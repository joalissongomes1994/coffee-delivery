import { TCoffeeListData } from '../../coffeeList'
import { ActionTypes } from './actions'

interface CoffeesState {
  coffees: TCoffeeListData[]
  coffeeId: string | null
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const hasThisCoffee = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.newCoffee.id,
      )

      if (!(hasThisCoffee < 0)) return state

      const newCoffeePayload = {
        ...action.payload.newCoffee,
        amount: action.payload.coffeeAmount,
      }

      return {
        ...state,
        coffees: [...state.coffees, newCoffeePayload],
      }
    }
    case ActionTypes.REMOVE_COFFEE: {
      const newArrayCoffees = state.coffees.filter(
        (coffee) => coffee.id !== action.payload.coffeeId,
      )

      return {
        ...state,
        coffees: newArrayCoffees,
      }
    }
    case ActionTypes.COFFEES_AMOUNT_INCREMENT: {
      const newCoffeeState = state.coffees.map((coffee) => {
        if (coffee.id === action.payload.coffeeId) {
          coffee.amount = action.payload.coffeeAmount + 1
        }

        return coffee
      })

      return {
        ...state,
        coffees: newCoffeeState,
      }
    }
    case ActionTypes.COFFEES_AMOUNT_DECREMENT: {
      const newCoffeeState = state.coffees.map((coffee) => {
        if (coffee.id === action.payload.coffeeId) {
          coffee.amount = action.payload.coffeeAmount - 1
        }

        return coffee
      })

      return {
        ...state,
        coffees: newCoffeeState,
      }
    }
    default:
      return state
  }
}
