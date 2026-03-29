import React from 'react'
import dollarImg from'../../assets/Currency.png'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="flex justify-between align-center gap-4 font-bold">
        0 coins
     <img src={dollarImg} alt="" />
    </button>
  </div>
</div>
  )
}

export default Navbar