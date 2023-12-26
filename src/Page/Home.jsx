import React,{useRef}  from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

import Social from '../component/Social';
import Nav from '../component/Nav';
import WorkProcess from '../component/WorkProcess';
import APPROXIMATE from '../component/APPROXIMATE';
import Contacet from '../component/Contacet';
import Footer from '../component/Footer';




export default function Home() {
  const Work = useRef(null)

  const movetoWork = ()=>{
    Work.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const Portfolio = useRef(null)

  const movetoPortfolio = ()=>{
    Portfolio.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const Price = useRef(null)

  const movetoPrice = ()=>{
    Price.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
   <>
   <Nav show={true} movedow={{movetoWork,movetoPortfolio,movetoPrice}} btn={{Work,Portfolio,Price}}/>
   <section className="background   py-8 height_" ref={Portfolio}>
    <div className="container mx-auto flex items-center h-full height_ space-x-0 md:space-x-16 flex-col md:flex-row md:space-y-0 space-y-6 sm:text-center  sm:justify-end justify-center">
      <div className="w-1/2">
        <img className="rounded-md hover:opacity-80 hover:rotate-3" src={require("../images/image10.jpg")} alt="" />
      </div>
      <div className="space-y-24 w-1/2">
      <h1 className="text-4xl text-emerald-600 capitalize font-bold text-center">Social Media Marketing</h1>
      <p className="line-clamp-3 opacity-70 text-white text-lg space-y-4">Assertively innovate pandemic communities before real-time resources. Holisticly revolutionize professional ROI through cost effective growth strategies. Progressively customize wireless services after web-enabled imperatives.</p>
      <div>
      </div>
    </div>
    </div>
   </section>
   <Social/>
   <section className="bg-slate-50 py-40">
      <div className="container mx-auto text-center space-y-8">
        <h1 className="text-xl capitalize text-slate-800 cursor-pointer">HOW WE WORK</h1>
        <h1 className="text-8xl text-slate-800 cursor-pointer">Work Process</h1>
      </div>
   </section>
   <WorkProcess btn={Work}/>
   <APPROXIMATE btn={Price}/>
   <Contacet/>
   <Footer/>
   </>
  )
}
