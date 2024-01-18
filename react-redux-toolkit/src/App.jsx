import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cakeview from './features/cake/Cakeview'
import Icecreamview from './features/icecream/Icecreamview'
import Userview from './features/user/Userview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cakeview />
        <Icecreamview />
        <Userview />
      </div>
    </>
  )
}

export default App
