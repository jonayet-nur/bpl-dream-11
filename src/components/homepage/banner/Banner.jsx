import React from 'react'
import"./banner.css"
import bannerImg from "../../../assets/banner-main.png"
const Banner = () => {
  return (
    <div className='container mx-auto mt-8 '>
        <div className='banner-bg rounded-2xl'>
        <img src={bannerImg} alt="" className='banner-logo' />
         <h2 className='banner-tittle'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
         <p className='banner-subtittle'>Beyond Boundaries Beyond Limits</p>
         <button className='banner-btn'>Claim Free Credit</button>
        </div>
       
       
    </div>
  )
}

export default Banner