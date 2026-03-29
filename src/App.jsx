
import { Suspense } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Player from './components/player/player'
const fetchPlayer = async()=>{
  const res = await fetch("/data.json")
  return res.json()
}
function App() {
  const playerPromise = fetchPlayer()

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
      <Player playerPromise = {playerPromise}></Player>
     </Suspense>
    </>
  )
}

export default App
