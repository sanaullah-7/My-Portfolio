import React from 'react'
import image from "../assets/image.png"
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { SlOptionsVertical } from 'react-icons/sl'

function Navbar() {
    const [Open, SetOpen] = useState(false)

    function handleToogle() {
        SetOpen(!Open)
    }

    return (
        <>
            <div className='hidden sm:flex  justify-between px-7 items-center font-bold p-2 text-whit shadow-2xl shadow-[blue] '>
                <div className='flex gap-x-3 '>
                    <img src={image} className='h-12 w-12  rounded-full object-contain bg-black' alt="" />
                    <div className=' cursor-pointer text-xl' style={{ textShadow: '0 0 5px #fff, 0 0 5px #000' }} >
                        <h1>Sana <span className='text-white'>Ullah</span> </h1>
                        <h1 className='text-sm'>Web Devloper</h1>
                    </div>

                </div>
                <div  >
                    <ul className='flex gap-5 md:gap-9  text-white  '>
                        <a href=""> <li className=' nav' >Home</li></a>
                        <a href=""> <li className=' nav' >About</li></a>
                        <a href=""> <li className=' nav' >Skill</li></a>
                        <a href=""> <li className=' nav' >Project</li></a>
                        <a href=""> <li className=' nav' >Contact</li></a>
                    </ul>
                </div>
            </div>
            {/* small sreen */}
            <div className='sm:hidden flex  items-center justify-between text-white w-full fixed z-10 shadow-2xl  p-5 font-bold bg-gradient-to-r from-blue-400 to-blue-600/70 shadow-[blue]'>

                <div className='flex gap-x-3 '>
                    <img src={image} className='h-12 w-12  rounded-full object-contain bg-black' alt="" />
                    <div className=' cursor-pointer text-xl' style={{ textShadow: '0 0 5px #fff, 0 0 5px #000' }} >
                        <h1>Sana <span className='text-[white]'>Ullah</span> </h1>
                        <h1 className='text-sm'>Web Devloper</h1>
                    </div>

                </div>
                <div onClick={handleToogle} className='cursor-pointer text-2xl'>
                    {Open ? <IoMdClose /> : <SlOptionsVertical />}
                </div>
            </div >

            {/* Sliding Menu */}
            {
                Open && (
                    <div className='z-10 h-full fixed w-1/2 font-bold bg-gradient-to-r from-blue-400 to-blue-600/70   sm:hidden justify-between px-7 items-center  p-2 text-whit shadow-2xl shadow-black '>

                        <div className='mt-20'  >
                            <ul className='flex flex-col mt-20 gap-5 md:gap-9 hover:shadow-2xl hover:shadow-amber-400  '>
                                <a href="" className='hover:shadow-2xl hover:shadow-amber-400'> <li >Home</li></a>
                                <a href="" className='hover:shadow-2xl hover:shadow-amber-400'> <li >About</li></a>
                                <a href="" className='hover:shadow-2xl hover:shadow-amber-400'> <li >Skill</li></a>
                                <a href="" className='hover:shadow-2xl hover:shadow-amber-400'> <li >Project</li></a>
                                <a href="" className='hover:shadow-2xl hover:shadow-amber-400'> <li >Contact</li></a>
                            </ul>
                        </div>
                    </div>

                )
            }

        </>
    )
}

export default Navbar
