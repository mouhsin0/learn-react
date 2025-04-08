import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Footer from './Footer'
import { deliver } from '../App'

export const dataRducer = createContext()

function Body() {

  const data = useContext(deliver)


  const reducer = (state, action) => {

    switch(action){

      case 'plus':
        return state + 1
      case 'minus':
        return state - 1
      case 'reset':
        return 0

      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, 0)

  useEffect(() => {


  }, [data])

  return (

    
    <>
    
    <div> Welcome to body </div>

    <div>
      <p> Hello {data[0].name} how old are you, Im {data[0].age} year old </p>
    </div>

    <div className='w-auto p-4 flex gap-x-4 border border-solid border-gray-400 rounded-md'>

      <button onClick={() => dispatch('minus')} className='bg-red-400 text-white px-3 py-1'> - </button>
      <span> {state} </span>
      <button onClick={() => dispatch('plus')} className='bg-green-500 text-white px-3 py-1'> + </button>
      <button onClick={() => dispatch('reset')} className='bg-gray-800 text-white px-3 py-1'> reset </button>

    </div>

    <dataRducer.Provider value={dispatch} >

    <Footer/>

    </dataRducer.Provider>

    </>

  )
}

export default Body