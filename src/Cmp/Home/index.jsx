import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import  { addImages,removeImage,resetImage } from '../redux/Slice/image.slice'

// import { useSelector } from 'react-redux'


function Home() {
 const dispatch = useDispatch()
 const res = useSelector(res=>res)
 

 const {imageSlice} = res
 console.log(imageSlice)
    const Submit = (e)=>{
        e.preventDefault()
        const url = e.target[0].value
        dispatch(addImages(url))
    }
  return (
    <>
    <div className='flex justify-center items-center bg-amber-50 min-h-screen'>
        <div className='flex flex-col gap-y-6'>
            <h1 className='text-6xl font-bold text-red-600'>
                paste Url
            </h1>
            <div>
                <form onSubmit={Submit}>
                <input type="url" required className='border border-red-500 rounded-lg w-96 p-3' />
                <div className='flex item-center gap-x-3 mt-2'>
                    <button type='submit' className='bg-red-600 text-white rounded p-2 px-5'>Submit</button>
                    <button onClick={()=>dispatch(resetImage())} type='button' className='bg-red-600 text-white rounded p-2 px-5'>Reset</button>
                    <Link className="font-semibold text-gray-600" to="/image">View</Link>
                </div>
                </form>
                <div className='grid grid-cols-3 gap-3 p-2'>
                {
                    imageSlice.map((ele,i)=>(
                        
                            <img key={i} 
                            onClick={()=>dispatch(removeImage(i))}
                            src={ele} 
                             alt="images" 
                              width={480}/>
                      
                    ))
                }
                </div>
                {/* {
                    src && 
                    <img src={src} onClick={()=>setSrc(null)} width={450} alt="" />
                } */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Home