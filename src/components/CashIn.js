import { useBalanceStore } from '../store/useBalanceStore'
import { useItemsStore } from '../store/useItemsStore'
import { useAllowBuy } from '../hooks/useAllowBuy'
import { twJoin } from 'tailwind-merge'
import { calcChange } from '../utils/calcChange'
import { Button } from './Button'

export const CashIn = () => {
  const { resetStores } = useItemsStore()
  const { balance, updateBalance, resetBalance } = useBalanceStore()
  const { allow: allowBuy, change } = useAllowBuy()

  const buyHandler = allowed => {
    if (allowed) {
      const changeCoins = calcChange(change)
      alert(`get your change: ${changeCoins.toString()}`)
      resetBalance()
      resetStores()
    }
  }

  return (
    <div className={'flex flex-col w-full gap-5'}>
      <div className={'grid grid-cols-3 gap-5'}>
        <Button
          className={'bg-amber-800 text-white'}
          onClick={() => updateBalance(1)}
        >
          1 €
        </Button>
        <Button
          className={'bg-amber-800 text-white'}
          onClick={() => updateBalance(0.5)}
        >
          0.5 €
        </Button>
        <Button
          className={'bg-amber-800 text-white'}
          onClick={() => updateBalance(0.1)}
        >
          0.1 €
        </Button>
      </div>
      <div className={'text-center text-xl'}>Balance: {balance} €</div>
      <div className={'text-center'}>
        <Button
          className={!allowBuy ? 'opacity-50' : 'opacity-100'}
          onClick={() => buyHandler(allowBuy)}
        >
          BUY
        </Button>
      </div>
    </div>
  )
}
