
import Card from '../ui/Card'

const AvailablePlayer = ({data,setCoin,coin,selectedPlayers,setSelectedPlayers}) => {
    // console.log(data)

    
  return (
    <div className='container mx-auto  grid  md:grid-cols-3 gap-8'>

        {
            data.map(player =>{
                return   <Card key={player.name} player={player} setCoin= {setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
            })
        }
    
    </div>
  )
}

export default AvailablePlayer