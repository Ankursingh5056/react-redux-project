import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <header className='bg-slate-300 sticky z-[20] top-0 flex-wrap mx-auto flex w-full items-center justify-between border-gray-500 p-8'>
        <h1>Navbar</h1>
       <nav className='flex justify-end w-1/3' >
       <div className='hidden md:flex w-full justify-between'>
            <NavLink >About</NavLink>
            <NavLink >Home</NavLink>
            <NavLink >Contact</NavLink>
            <NavLink >Profile</NavLink>
        </div>
        <div className='md:hidden'>
            <button onClick={()=>setIsOpen(!isOpen)}>
                {
                    isOpen ? <IoIosCloseCircle />:  <IoMdMenu />  
                }
            </button>
        </div>




       
       
        </nav>
        {
            isOpen && 
            <div className='md:hidden flex flex-col basis-full items-center' >
            <NavLink >About</NavLink>
            <NavLink >Home</NavLink>
            <NavLink >Contact</NavLink>
            <NavLink >Profile</NavLink>
        </div>
        }
    </header>
  )
}

export default Navbar



