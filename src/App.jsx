import { ToastContainer } from 'react-toastify'

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Player from './components/player/player'
import { DiVim } from 'react-icons/di'
const fetchPlayer = async()=>{
  const res = await fetch("/data.json")
  return res.json()
}
function App() {
  const playerPromise = fetchPlayer()
const [coin, setCoin]= useState(10000)
  return (
    <>
    <ToastContainer />
     <Navbar coin= {coin}></Navbar>
     <Banner></Banner>
     <Suspense fallback={<div className='flex justify-center items-center gap-5 min-h-screen'>
      <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
<span className="loading loading-ring loading-xl"></span>
     </div>}>
      <Player playerPromise = {playerPromise} setCoin= {setCoin} coin= {coin}></Player>
     </Suspense>
    </>
  )
}

export default App
