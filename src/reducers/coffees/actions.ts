import { TCoffeeListData } from "../../coffeeList"
import { CheckoutFormData } from "../../pages/Checkout"


export enum ActionTypes {
  'ADD_COFFEE'= 'ADD_COFFEE',
  'RESET_COFFEE'= 'RESET_COFFEE',
  'CREATE_CHECKOUT'= 'CREATE_CHECKOUT',
  'REMOVE_COFFEE'= 'REMOVE_COFFEE',
  'COFFEES_AMOUNT_INCREMENT'= 'COFFEES_AMOUNT_INCREMENT',
  'COFFEES_AMOUNT_DECREMENT'= 'COFFEES_AMOUNT_DECREMENT'
}

export function createCheckoutAction(checkoutData: CheckoutFormData) {
  return {
    type: ActionTypes.CREATE_CHECKOUT,
    payload: {
      checkoutData
    }
  }
}

export function addCoffeeAction(newCoffee: TCoffeeListData, coffeeAmount: number) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
      coffeeAmount
    }
  }
}

export function resetCoffeeAction() {
  return {
    type: ActionTypes.RESET_COFFEE,
  }
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId
    }
  }
}

export function coffeesAmountIncrementAction(coffeeId: string, coffeeAmount: number) {
  return {
    type: ActionTypes.COFFEES_AMOUNT_INCREMENT,
    payload: {
      coffeeId,
      coffeeAmount
    }
  }
}

export function coffeesAmountDecrementAction(coffeeId: string, coffeeAmount:number) {
  return {
    type: ActionTypes.COFFEES_AMOUNT_DECREMENT,
    payload: {
      coffeeId,
      coffeeAmount
    }
  }
}