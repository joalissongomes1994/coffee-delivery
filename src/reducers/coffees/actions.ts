import { TCoffeeListData } from "../../coffeeList"


export enum ActionTypes {
  'ADD_COFFEE'= 'ADD_COFFEE',
  'REMOVE_COFFEE'= 'REMOVE_COFFEE',
  'COFFEES_AMOUNT_INCREMENT'= 'COFFEES_AMOUNT_INCREMENT',
  'COFFEES_AMOUNT_DECREMENT'= 'COFFEES_AMOUNT_DECREMENT'
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