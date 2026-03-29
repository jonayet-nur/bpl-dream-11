
import { Suspense, useState } from 'react'
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
const [coin, setCoin]= useState(9760000000)
  return (
    <>
     <Navbar coin= {coin}></Navbar>
     <Banner></Banner>
     <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
    <div className="flex gap-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="loading loading-ball loading-xl"></span>
      ))}
    </div>
  </div>}>
      <Player playerPromise = {playerPromise} setCoin= {setCoin}></Player>
     </Suspense>
    </>
  )
}

export default App
