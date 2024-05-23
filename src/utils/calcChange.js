import { COINS } from '../constants/coins'

export const calcChange = currentAmount => {
  let change = []
  let amount = currentAmount
  const coins = COINS.sort((a, b) => b - a)

  for (const coin of coins) {
    let count = Math.floor(amount / coin)
    for (let i = 0; i < count; i++) {
      change.push(coin)
    }
    amount -= count * coin
  }

  return change
}
