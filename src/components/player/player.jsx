import React, { use } from 'react'

const Player = ({playerPromise}) => {
    console.log(playerPromise)
    const data = use(playerPromise)
    console.log(data)
  return (
    <div>

    </div>
  )
}

export default Player