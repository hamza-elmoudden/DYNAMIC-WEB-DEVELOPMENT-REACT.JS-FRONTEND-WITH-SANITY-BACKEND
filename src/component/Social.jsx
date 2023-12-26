import React from 'react'

export default function Social() {
  return (
    <>
    <section className="py-16 bg-slate-500">
        <div className="container mx-auto flex flex-col md:flex-row space-y-4 space-x-4 items-center ">
      <div className="w-1/2">
        <img className="rounded-sm hover:opacity-80 hover:rotate-3" src={require("../images/image14.jpg")} alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center space-y-20 text-white">
        <h1 className="text-4xl  capitalize font-bold">Social Media <span className="text-teal-300">Marketing</span></h1>
        <p className="text-sm line-clamp-5 text-opacity-25 capitalize">Assertively innovate pandemic communities before real-time resources. Holisticly revolutionize professional ROI through cost effective growth strategies. Progressively customize wireless services after web-enabled imperatives.</p>
      </div>
    </div>
   </section>
    </>
  )
}
