import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../redux/Slice/post.slice'
import { setData } from '../redux/Slice/post.slice'
function Post() {
  const post = useSelector(res => res.PostSlice)
  // console.log(post)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost())
  }, [])

  return (
    <>
      {
        post.loading &&
        (
          <div className='flex justify-center items-center bg-red-100 min-h-screen'>
            <h1 className='text-lg bg-white p-3 px-3 rounded'>Loading</h1>
          </div>
        )
      }
      {
        (post.loading == false && post.data) &&
        (
          <div className='flex flex-col gap-y-4 py-16 items-center bg-red-100 min-h-screen'>
            {
              post.data.map((ele, i) => (
                // console.log(ele)
                <div key={i} className='flex  flex-col items-center justify-center bg-white p-3 rounded-lg 
                shadow-lg md:w-3/4 md:px-0 animate__animated animate__zoomIn'>
                  <h1>{ele.id}</h1>
                  <p className='text-sm font-semibold test-slate-500'> First name : {ele.first_name}</p>
                  <p className='text-sm font-semibold test-slate-500'> Last name name : {ele.last_name}</p>
                  <p className='text-xl'> Email : {ele.email}</p>
                </div>
              ))
            }
          </div>
        )
      }
      {
        (post.loading == false && post.error) &&
        (
          <div className='flex justify-center items-center bg-red-100 min-h-screen'>
            <h1 className='text-lg font-semibold bg-red-500 p-3 px-3 rounded'>something went wrong !</h1>
          </div>
        )
      }
    </>
  )
}

export default Post