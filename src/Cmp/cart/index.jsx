import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeCart,removeAllCart} from "../redux/Slice/cart.sclice"
// import{CartSlice} from "../redux/Slice/cart.sclice"

function Cart() {
  const dispatch = useDispatch()
    const cart = useSelector(res=>res.CartSlice)
    // console.log(cart)
  return (
    <div>

      
       (
                    <div className='flex justify-center mt-20' >
                    
                        <div className='bg-red-50 p-15 grid w-3/4    gap-8'>
                        <div className=''>
                      {
                       ( cart.length > 0 ) ?
                        <button 
                     onClick={()=>dispatch(removeAllCart())}
                     className='text-white p-2  bg-red-500 rounded'>Remove All Cart
                     </button>
                     : 
                     
                       <div className='flex justify-center'>
                        <h1 className='text-2xl font-semibold text-slate-500 '>Your cart is empty..</h1>
                       </div>
                    
                      }
                    
                     </div>
                            {
                                cart.map((ele, i) => (
                                    <div className=' flex gap-3 items-center justify-center shadow-lg bg-white rounded-lg p-8 border' key={i}>

                                        <div className='flex justify-center items-center'>
                                        <img
                                            src={ele.image}
                                            alt="img" 
                                            style={{
                                                width : 200,
                                                height : 210
                                            }}
                                            />
                                        </div>
                                      <div>
                                      <div className='flex flex-col gap-2 mt-4'>
                                            <h1 className='font-semibold text-lg'>{ele.title.slice(0,20)}</h1>
                                            <p className='text-gray-600'>{ele.description.slice(0, 40)}..</p>
                                            <h1 className='font-semibold text-lg'> Rs .{ele.price}</h1>
                                        </div>
                                        <div className='flex gap-4 mt-4'>
                                           
                                            <button className='text-white 
                                            font-semibold 
                                            bg-green-500 px-3 
                                             p-2 rounded
                                             hover:bg-green-700'>buy now</button>
                                            <button 
                                            onClick={()=>dispatch(removeCart(i))}
                                            className='text-white 
                                            font-semibold 
                                            bg-rose-500 px-3 
                                             p-2 rounded
                                             hover:bg-rose-700'>remeve</button>
                                        </div>
                                      </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
    </div>
  )
}

export default Cart