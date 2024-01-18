import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const Cakeview = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch();

  return (
    <div>
        <h2>No of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}

export default Cakeview