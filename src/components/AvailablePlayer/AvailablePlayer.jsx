
import Card from '../ui/Card'

const AvailablePlayer = ({data,setCoin}) => {
    // console.log(data)

    
  return (
    <div className='container mx-auto  grid  md:grid-cols-3 gap-8'>

        {
            data.map(player =>{
                return   <Card player={player} setCoin= {setCoin}></Card>
            })
        }
    
    </div>
  )
}

export default AvailablePlayer