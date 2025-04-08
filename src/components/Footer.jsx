import React, { useContext } from 'react'
import { deliver } from '../App'
import { dataRducer } from './Body'
import { fetchData } from '../custom hooks/custom.hooks'

function Footer() {


  const data = useContext(deliver)

  const dataReducer = useContext(dataRducer)

  // console.log(dataReducer)

  const result = fetchData('https://jsonplaceholder.typicode.com/users')  

  console.log(result)

  return (

    <>


      <div>
        {data.map((el, i) => (

          <div key={i}>

            <p>

              <span> {el.id} </span>
              <span> {el.name} </span>
              <span> {el.age} </span>
            </p>

          </div>
        ))}
      </div>


      <div className='p-5  shadow-xl border border-solid border-gray-300 rounded-md flex gap-x-4'>

          <button onClick={() => dataReducer('plus')} className='bg-blue-400 text-white px-3 py-1 rounded-md'> + </button>

          <button onClick={() => dataReducer('minus')} className='bg-yellow-500 text-white px-3 py-1 rounded-md'> - </button>

          <button onClick={() => dataReducer('reset')} className='bg-gray-800 text-white px-3 py-1 rounded-md'> reset </button>

      </div>

    </>

  )
}

export default Footer