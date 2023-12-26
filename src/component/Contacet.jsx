import React from 'react'
import "./Contacet.css"

export default function Contacet() {
  return (
    <>
  <section className="bg-gray-800 py-9" id="contact">
    <div className="container mx-auto">
    <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4">
  <h2 className="text-white font-bold text-2xl">Contact Us</h2>
  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-white" htmlFor="emotions">Name</label>
      <input placeholder="Name"  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-4 py-2" id="emotions" type="text"/>
    </div>
    <div className="flex-1">
      <label className="text-white" htmlFor="symbols">Last Name</label>
      <input placeholder="Last Name"  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-4 py-2" id="symbols" type="text"/>
    </div>
  </div>
  <div className="mt-4">
    <label className="text-white" htmlFor="title">Title</label>
    <input placeholder="Title"  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-4 py-2" type="text"/>
  </div>
  <div className="mt-4 flex flex-row space-x-2">
  </div>
  <div className="mt-4">
    <label htmlFor="story-output" className="text-white">Description</label>
    <textarea placeholder="Description" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-4 py-2 h-48" id="story-output"></textarea>
  </div>
  <div className="mt-4 flex justify-center">
    {/* <button className="bg-teal-500 text-white rounded-md py-3 px-5 hover:bg-teal-600 hover:text-white" id="generate-button" type="button">Submit</button> */}
    <button class="btn-cont  w-96">
        <span class="text">send message</span>
        <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
    </button>
  </div>
    </div>
    </div>
  </section>

    </>
  )
}
