import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'

export const deliver = createContext('')

function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([
    {

    id: 1, name: 'brahim', age: 24,
  },
  {id: 2, name: 'toufik', age: 18},
  {id: 3, name: 'salima', age: 10},
  {id: 4, name: 'meryem', age: 21},
  {id: 5, name: 'loubna', age: 15}
])

  return (
    <>

    <h3 className='text-[30px] font-semibold'> Hello world are you fine ?</h3>


    <deliver.Provider value={data}>

    <Header/>
    </deliver.Provider>

    </>
  )
}

export default App
