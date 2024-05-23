import { useItemsStore } from '../store/useItemsStore'
import { useBalanceStore } from '../store/useBalanceStore'
import { useEffect, useState } from 'react'
import { calcPrice } from '../utils/calcPrice'

export const useAllowBuy = () => {
  const [allow, setAllow] = useState(false)
  const [change, setChange] = useState(0)
  const { selectedDrinks, selectedToppings, resetStores } = useItemsStore()
  const { balance, updateBalance, resetBalance } = useBalanceStore()

  useEffect(() => {
    const price = calcPrice(selectedDrinks, selectedToppings)
    if (balance > 0 && balance >= price) {
      setChange(balance - price)
      setAllow(true)
    } else {
      setAllow(false)
    }
  }, [selectedDrinks, selectedToppings, balance])

  return { allow, change }
}
