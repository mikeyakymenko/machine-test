import { create } from 'zustand'
import { addOrRemoveItem } from '../utils/addOrRemoveItem'

export const useItemsStore = create(set => ({
  selectedDrinks: [],
  selectedToppings: [],
  handleDrinks: item =>
    set(state => ({
      selectedDrinks: addOrRemoveItem(state.selectedDrinks, item)
    })),
  handleToppings: item =>
    set(state => ({
      selectedToppings: addOrRemoveItem(state.selectedToppings, item)
    })),
  resetStores: () =>
    set(state => ({ selectedDrinks: [], selectedToppings: [] }))
}))
