import { calcPrice } from '../utils/calcPrice'
import { useItemsStore } from '../store/useItemsStore'

export const TotalPrice = () => {
  const { selectedDrinks, selectedToppings } = useItemsStore()

  return (
    <span className={'text-3xl'}>
      your price is:{' '}
      <strong>{calcPrice(selectedDrinks, selectedToppings)}</strong> €
    </span>
  )
}
