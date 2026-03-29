import React, { useState } from 'react'
import { FaFlag, FaUser } from 'react-icons/fa'

// import React from 'react'

const Card = ({player,setCoin}) => {
    const[isSelected,setSelected]= useState(false)
    const HandleChoosePlayer = ()=>{
        isSelected(true)
        setCoin(5)
    }
  return (
     <div key={player.name} className="card bg-base-100  shadow-sm">
  <figure >
    <img
      src={player.image}
      alt="Shoes" className='w-full h-56 '/>
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser> {player.name}</h2>
    <div className='flex justify-between gap-2 items-center'>
        <div className='flex justify-between items-center gap-3'>
            <FaFlag></FaFlag>
            <p>{player.country}</p>
        </div>
        <button className='btn '>{player.type}</button>
    </div>
    <div className="divider"></div>
    <h2 className='font-bold'>Rating {player.rating}</h2>
    <div className='flex justify-between gap-3 items-center font-bold'>
        <p>{player.batting_style}</p>
        <p className='text-right'>{player.bowling_style}</p>
    </div>
    
   <div className='flex justify-between items-center gap-3'>
    <h3 className='font-semibold'>price:${player.price}</h3>
    <button className='btn ' onClick={()=> setSelected(true)} disabled={isSelected}> {isSelected=== true ?"Selected" :"Choose Player"}</button>
   </div>
  </div>
</div>
  )
}

export default Card