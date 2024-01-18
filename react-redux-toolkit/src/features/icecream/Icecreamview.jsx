import React from 'react'
import { useSelector } from 'react-redux'

const Icecreamview = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)

  return (
    <div>
        <h2>No of icecream - {numOfIcecreams} </h2>
        <button>Order icecream</button>
        <button>Restock icecream</button>
    </div>
  )
}

export default Icecreamview