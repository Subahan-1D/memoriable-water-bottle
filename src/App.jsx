
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Bottle from './components/Bottle/Bottle'

function App() {

  const [bottles,setBottles] = useState([])
  const [cart,setCart] = useState([])

  useEffect(()=>{
    fetch('./Bottle.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])

  const handleAddCart = bottle =>{
   const newCart =[...cart,bottle]
   setCart(newCart)
  }

  return (
    <>
    <h1>Memorable Water Bottle</h1>
    <h3>Memorable Bottle :{bottles.length} </h3>
    <h2>Cart : {cart.length}</h2>
      <div className='display'>
      {
        bottles.map(bottle=> <Bottle
         key={bottle.id}
          bottle={bottle}
          handleAddCart ={ handleAddCart}
          ></Bottle>)
      }
      </div>
    </>
  )
}

export default App
