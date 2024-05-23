import { useItemsStore } from '../store/useItemsStore'
import { DisplayItems } from './DisplayItems'
import { useDataFetch } from '../hooks/useDataFetch'

export const DisplayDrinks = () => {
  const { selectedDrinks, handleDrinks } = useItemsStore()
  const { data, isLoading, error } = useDataFetch('/drinks.json')

  return (
    <>
      {isLoading && <div>loader</div>}
      {data && !error && (
        <div className={'space-y-5'}>
          <h2 className={'text-center text-5xl font-bold'}>
            Choose your drinks
          </h2>
          <DisplayItems items={data?.drinks} isDrinks={true} />
        </div>
      )}
      {error && <div>Sorry error here, try later</div>}
    </>
  )
}
