import { twJoin } from 'tailwind-merge'
import { useItemsStore } from '../store/useItemsStore'

export const Card = ({ item, isDrinks }) => {
  const store = useItemsStore()
  // tricky, it's because only two tipes, but could be replaced with other functionality
  // which gets propper funciton

  const onClick = isDrinks ? store.handleDrinks : store.handleToppings
  const selectedItems = (
    isDrinks ? store.selectedDrinks : store.selectedToppings
  ).map(item => item.name)

  return (
    <div
      className={twJoin(
        'rounded-lg shadow-lg shadow-gray-200/80 p-5',
        'flex flex-col justify-center items-center cursor-pointer',
        selectedItems.includes(item.name) ? 'bg-amber-300' : 'bg-white'
      )}
      onClick={() => onClick(item)}
    >
      <span className={'text-3xl'}>{item.name}</span>
      <span className={'text-xl'}>{item.price} €</span>
    </div>
  )
}
