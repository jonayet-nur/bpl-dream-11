import React, { use, useState } from 'react'
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer'
import SelectedPlayer from '../Selectedplayer/SelectedPlayer'

const Player = ({playerPromise,setCoin,coin}) => {
    // console.log(playerPromise)
    const data = use(playerPromise)

    //selected type toogle er jonno usestate use
    const[selectedType,setSelectedType]= useState("available")
    

    const[selectedPlayers,setSelectedPlayers] = useState([])
  return (
    <div className='container mx-auto my-10 '>
       <div className='flex flex-col md:flex-row justify-between gap-4 items-center mb-8'>
       {selectedType==="available"?<h2 className='font-bold text-2xl'>Available Players</h2>: <h2 className='font-bold text-2xl'>Selected Players({selectedPlayers.length} / {data.length})</h2>} 
        <div>
            <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType==="available"?"bg-[#E7FE29]":""}  rounded-r-none rounded-l-xl`}>Available</button>
            <button  onClick={()=> setSelectedType("selected")} className={`btn ${selectedType==="selected"?"bg-[#E7FE29]":""} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
        </div>
       </div>
{selectedType==="available"?<AvailablePlayer data= {data} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayer>:<SelectedPlayer selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayer>}
    </div>
  )
}

export default Player