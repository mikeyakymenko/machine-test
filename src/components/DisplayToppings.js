import { DisplayItems } from './DisplayItems'
import { useDataFetch } from '../hooks/useDataFetch'

export const DisplayToppings = () => {
  const { data, isLoading, error } = useDataFetch('/toppings.json')

  return (
    <>
      {isLoading && <div>loader</div>}
      {data && !error && (
        <div className={'space-y-5'}>
          <h2 className={'text-center text-5xl font-bold'}>
            Choose your Toppings
          </h2>
          <DisplayItems items={data?.toppings} isDrinks={false} />
        </div>
      )}
      {error && <div>Sorry error here, try later</div>}
    </>
  )
}
