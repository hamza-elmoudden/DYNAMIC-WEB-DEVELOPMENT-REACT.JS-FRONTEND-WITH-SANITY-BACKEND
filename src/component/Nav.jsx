import React ,{useRef}from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"



export default function Nav(props) {
  const {show,movedow,btn} = props
  const {movetoWork,movetoPortfolio,movetoPrice} = movedow

  const showbar = ()=>{
      const bar = document.querySelector('.h_nav')
      console.log("ok" + bar)
      bar.classList.toggle("sh")
  }

  console.log(show)
  return (
    <>
    <nav className="bg-slate-800 py-6 font-bold  text-white  w-full opacity-1 z-10 fixed uppercase justify-end " >
      <div className="relative">
      <div className="md:block hidden">
    <div className="container mx-auto flex items-center justify-around">
    <div className="space-x-10 ml-14">
      {show ?  <a className="hover:text-yellow-400 hover:border-b-2 hover:border-b-orange-500 pb-4"  onClick={movetoWork}>Work Process</a>: null}
      <Link href="" className="hover:text-yellow-400 hover:border-b-2 hover:border-b-orange-500 pb-4" to="/" onClick={movetoPortfolio}>Portfolio</Link>
      {show ? <a className="hover:text-yellow-400 hover:border-b-2 hover:border-b-orange-500 pb-4" onClick={movetoPrice}>Price</a>:null}
    </div>
    <div>
    <button class="button-h" data-text="Awesome" >
    <span class="actual-text" >&nbsp;Contact&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Contact&nbsp;</span>
    </button>
    </div>
    </div>
    </div>
      <div className="w-full flex justify-end container m-auto  md:hidden">
      <div class="background-d " onClick={showbar}>
        <button class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      </div>
      </div>

    </nav>
    <div className="md:hidden block fixed w-full z-50">
    <div className="flex items-start justify-center flex-col h_nav w-1/2 bg-slate-800 space-y-16  absolute z-10  ">
    <div className="md:space-x-10 md:sapce-y-0 ml-14 flex felx-col space-x-0 justify-between">
      <ul className=" space-y-20 text-2xl text-white uppercase font-bold">
        <li>{show ?  <a className="hover:text-yellow-400 hover:border-b-2 hover:border-b-orange-500 pb-4"  onClick={movetoWork} >Work Process</a>: null}</li>
        <li className="hover:text-yellow-400 hover:border-b-2 hover:border-b-orange-500 pb-4" to="/" onClick={movetoPortfolio}> <Link href="" >Portfolio</Link></li>
        <li className="hover:text-yellow-400 hover:border-b-2 hover:border-b-orange-500 pb-4" onClick={movetoPrice}>{show ? <a >Price</a>:null}
        </li>
      </ul>
    </div>
    <div className='text-center w-full'>
    <button class="button-h" data-text="Awesome">
    <span class="actual-text">&nbsp;Contact&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Contact&nbsp;</span>
    </button>
    </div>
    </div>
    </div>

    </>
  )
}

