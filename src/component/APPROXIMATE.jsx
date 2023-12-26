import React from 'react'
import { useState,useEffect } from 'react';
import { client } from '../Client';


export default function APPROXIMATE(props) {
    const [card,setCard] = useState(null)
    const {btn} = props
    function get(){
      const data = client.fetch(`*[_type == "price"]{
        title,
        price,
        _id,
        taype[]->{
          title,
         
        }
      }
      `).then((data)=>setCard(data))
      
    }
    useEffect(()=>{
        get()
    },[])
  return (
    <>
       <section className="background py-28" id='APPRO' ref={btn}>
          <div className="container mx-auto text-center space-y-10">
            <h1 className="capitalize text-2xl text-ellipsis ">APPROXIMATE BUDGET</h1>
            <h1 className="capitalize text-7xl">TikTok Development Pricing</h1>
            <button className="smky-btn3 relative hover:text-sky-400 py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-slate-500 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600 text-3xl uppercase shadow-md font-bold">Get in touch</button>
          </div>
          <div className="container mx-auto pt-28 pb-3 gap-5  flex flex-wrap items-center justify-center flex-col md:flex-row space-y-4 md:space-y-0">
              {card && card.map((item)=>{
                return(
                  <>
                 <div className="md:w-1/4  space-y-10  opacity-80  px-6 py-16 flex flex-col justify-center bg-rose-300 rounded-lg text-center shadow-2xl" key={item._id}>
                <h1 className="text-3xl line-clamp-2 text-gray-950 ">{item.title}</h1>
                 <h1 className="text-4xl text-white ">$ {item.price} <span className="text-sm">/one-time</span></h1>
                 <div className="text-start space-y-2 pl-9">
                 <h1 className="text-gray-950">{item.taype[0].title}</h1>
                 <h1 className="text-gray-950">{item.taype[1].title}</h1>
                 <h1 className="text-gray-950">{item.taype[2].title}</h1>
                 </div>
                  </div>
                  </>
                )
              })}
          </div>
        </section>
    </>
  )
}
