import React, { use } from 'react'
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer'

const Player = ({playerPromise}) => {
    console.log(playerPromise)
    const data = use(playerPromise)
    
  return (
    <div className='container mx-auto'>
        player component 
<AvailablePlayer data= {data}></AvailablePlayer>
    </div>
  )
}

export default Player