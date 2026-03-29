
import Card from '../ui/Card'

const AvailablePlayer = ({data,setCoin,coin}) => {
    // console.log(data)

    
  return (
    <div className='container mx-auto  grid  md:grid-cols-3 gap-8'>

        {
            data.map(player =>{
                return   <Card player={player} setCoin= {setCoin} coin={coin}></Card>
            })
        }
    
    </div>
  )
}

export default AvailablePlayer