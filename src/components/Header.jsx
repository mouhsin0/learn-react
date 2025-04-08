import React, { useEffect, useRef, useState } from 'react'
import Body from './Body'
import axios from "axios"

function Header() {
  

  const [result, setResult] = useState([])

  const filter = useRef()

  const filtering = () => {

   let test = result.find(el => el.name.includes(filter))

    console.log(test)

    return test
  }

  

  useEffect(() => {

    axios('https://jsonplaceholder.typicode.com/users').then(res => {

      console.log(res)
  
      setResult(res.data)
  
    }).catch(err => console.log(err))


    filtering()

  }, [])




  return (

    <>

      <div> Welcome to header </div>

      <input className='outline-none border border-solid border-gray-400' ref={filter} onChange={() => console.log(filter.current.value)} />

      <div className='p-3'>

        <ol>
          {result.map(el => (

            <li key={el.id}> {el.name}  </li>

          ))}
        </ol>
      </div>

      <Body />

    </>

  )
}

export default Header