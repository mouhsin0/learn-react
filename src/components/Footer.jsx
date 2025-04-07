import React, { useContext } from 'react'
import { deliver } from '../App'

function Footer() {


  const data = useContext(deliver)

  console.log(data)

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

    </>

  )
}

export default Footer