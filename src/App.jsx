import { useState } from 'react'
import './App.css'
import BackCard from './components/BackCard'
import FormCard from './components/FormCard'
import FrontCard from './components/FrontCard'

function App() {
  const [count, setCount] = useState(0)
  const [formCard, setFormCard] = useState({name:'', number:'', month:'' , year:'', cvc:''})

  return (
    <div className="App">
      <h1>Probanding</h1>
      <FrontCard formCard={formCard}/>
      <BackCard formCard={formCard}/>
      <FormCard formCard={formCard} setFormCard={setFormCard}/>
    </div>
  )
}

export default App
