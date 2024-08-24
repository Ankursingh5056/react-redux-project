import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/Slice/product.slice'
import { addToCart } from '../redux/Slice/cart.sclice'
function Product() {
    const dispatch = useDispatch()
    const product = useSelector((res) => res.productSlice)
    // console.log(product.data)

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <div>
            {
                product.loading &&
                (
                    <div className='flex justify-center items-center bg-red-100 min-h-screen'>
                        <h1 className='text-lg bg-white p-3 px-3 rounded'>Loading</h1>
                    </div>
                )
            }
            {
                (product.loading == false && product.data) &&
                (
                    <div >
                        <div className='bg-red-50 p-15 grid  mt-20 md:grid-cols-2 lg:grid-cols-4  gap-8'>
                            {
                                product.data.map((ele, i) => (
                                    <div className=' flex flex-col items-center justify-center shadow-lg bg-white rounded-lg p-8 border' key={i}>

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
                                        <div className='flex flex-col gap-2 mt-4'>
                                            <h1 className='font-semibold text-lg'>{ele.title.slice(0,20)}</h1>
                                            <p className='text-gray-600'>{ele.description.slice(0, 40)}..</p>
                                            <h1 className='font-semibold text-lg'> Rs .{ele.price}</h1>
                                        </div>
                                        <div className='flex gap-4 mt-4'>
                                            <button className='text-white 
                                            font-semibold
                                             bg-orange-500
                                              px-3  p-2 rounded
                                              hover:bg-orange-700'
                                            onClick={()=>dispatch(addToCart(ele))}
                                            >add to cart</button>
                                            <button className='text-white 
                                            font-semibold 
                                            bg-green-500 px-3 
                                             p-2 rounded
                                             hover:bg-green-700'>buy now</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                (product.loading == false && product.err) &&
                (
                    <div className='flex justify-center items-center bg-red-100 min-h-screen'>
                        <h1 className='text-lg bg-red-400 p-3 px-3 rounded'>something went wrong !</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Product