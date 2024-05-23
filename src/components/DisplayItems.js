import { Card } from './Card'

export const DisplayItems = ({ items, isDrinks }) => {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-3 p-5 gap-5'}>
      {items &&
        items.map((item, index) => (
          <Card
            key={`items-${item.name}-${index}`}
            item={item}
            isDrinks={isDrinks}
          />
        ))}
    </div>
  )
}
