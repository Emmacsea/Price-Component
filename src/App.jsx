import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AnnualPrice } from './Components/Annually Price'
import { MonthlyPrice } from './Components/Monthly Price'

function App() {
  const [price, setPrice] = useState(0)

  const monthlyPlan = () => setPrice(1)
  const annuallyPlan = () => setPrice(0)

  return (
    <div>
      
      {price === 0 && (
        <AnnualPrice monthly={monthlyPlan}/>

      )}

      {price === 1 && (
        <MonthlyPrice annually={annuallyPlan}/>
      )}

    </div>
  )
}

export default App
