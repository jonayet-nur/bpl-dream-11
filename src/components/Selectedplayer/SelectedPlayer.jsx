import React from 'react'
import { MdDelete } from 'react-icons/md'
import Player from '../player/player'
import { FaUser } from 'react-icons/fa'

const SelectedPlayer = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
    console.log(selectedPlayers)
    const handleDeletedselectedPlayer =(singlePlayer)=>{
        console.log(singlePlayer)
        const filterPlayer = selectedPlayers.filter(filterPlayer => filterPlayer.name !== singlePlayer.name)
        setSelectedPlayers(filterPlayer)
        setCoin(coin+ singlePlayer.price)
    }
  return (
    <div>

 {
    selectedPlayers.length===0 ?<div className='border-2 border-gray-200 p-20 text-xl md:text-5xl text-center font-bold shadow-xl rounded-2xl mx-5 md:max-w-none'>Not Player Available </div>:
    selectedPlayers.map((singlePlayer,ind)=>{
        return <div key={ind} className='flex justify-between items-center border-2 border-gray-300 my-5 rounded-2xl p-5 shadow-gray-200 shadow-2xl'>
            <div className='flex gap-6 '>
            <img src={singlePlayer.image} alt="" className='w- rounded-2xl' />
            <div >
                <h2 className='font-bold text-2xl'> {singlePlayer.name}</h2>
                <p className='text-gray-400'>{singlePlayer.type}</p>
            </div>
            </div>
            <button className='btn text-red-500' onClick={()=>handleDeletedselectedPlayer(singlePlayer)}><MdDelete></MdDelete> </button>
        </div>
    })
 }
    </div>
  )
}

export default SelectedPlayer