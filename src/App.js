import { DisplayDrinks } from './components/DisplayDrinks'
import { DisplayToppings } from './components/DisplayToppings'
import { TotalPrice } from './components/totalPrice'
import { CashIn } from './components/CashIn'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-stretch'>
      <header className='h-20 bg-amber-200 flex items-center justify-center'>
        <div className={'text-6xl font-black text-center'}>
          Hello I am a Machine!
        </div>
      </header>
      <div className={'grow mb-auto bg-gray-200 overflow-auto space-y-5 p-5'}>
        <DisplayDrinks />
        <DisplayToppings />
      </div>
      <footer className='h-40 bg-amber-200 flex items-stretch p-5'>
        <div className={'basis-1/2 flex items-center justify-center'}>
          <TotalPrice />
        </div>
        <div className={'basis-1/2 flex items-center justify-center'}>
          <CashIn />
        </div>
      </footer>
    </div>
  )
}

export default App
