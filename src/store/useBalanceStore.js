import { create } from 'zustand'

export const useBalanceStore = create(set => ({
  balance: 0,
  updateBalance: amount =>
    set(state => {
      return { balance: parseFloat((state.balance + amount).toFixed(2)) }
    }),
  resetBalance: () => set(state => ({ balance: 0 }))
}))
