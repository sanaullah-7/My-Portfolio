import React from 'react'

function Contact() {
    return (
        <div id='contact' className='mt-4 py-20 place-items-center justify-center flex flex-col'>
            <h1 className='font-bold text-3xl sm:text-4xl text-center   text-white ' style={{ textShadow: '0 0 5px #ffffff, 0 8px 10px #000' }}>
                <span className="inline-block border-l-8  rounded  border-black pl-3 mr-5">Contact Us</span>
                <p className='font-semibold text-xl mt-5 text-black text-shadow-none '>Please fill out the form below to contact me</p>
            </h1>
            <div className='bg-[#b3a5a5] p-5 w-[320px] sm:w-[400px]  md:w-[500px] rounded-xl mt-9'>
                <h1 className='font-bold  text-3xl'>Send Your Message</h1>
                <div className='mt-10'>
                    <label className='font-bold' htmlFor="">Full Name:</label>
                    <br />
                    <input className='bg-white rounded-md p-1 px-2 text-gray-500  font-semibold w-full' type="text" placeholder='Enter your full name' />
                </div>
                <div className='mt-5'>
                    <label className='font-bold' htmlFor="">Email:</label>
                    <br />
                    <input className='bg-white rounded-md p-1 px-2 text-gray-500  font-semibold w-full' type="text" placeholder='Email address' />
                </div>
                <div className='mt-5'>
                    <label className='font-bold' htmlFor="">Message:</label>
                    <br />
                    <textarea className='bg-white rounded-md p-1 px-2 text-gray-500  font-semibold w-full' rows={3} placeholder='Type your message here' name="" id=""></textarea>
                </div>
                <button className='bg-black text-white px-5 p-2 text-xl rounded-xl mt-4 cursor-pointer'>Send</button>

            </div>
        </div>
    )
}

export default Contact
