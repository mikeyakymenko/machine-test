export const calcPrice = (drinks, toppings) => {
  return [...drinks, ...toppings].reduce((acc, current) => {
    acc = acc + current.price
    return parseFloat(acc.toFixed(2))
  }, 0)
}
