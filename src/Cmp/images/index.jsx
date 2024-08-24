import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeImage } from '../redux/Slice/image.slice';

function Images() {
  const dispatch = useDispatch()
  const res = useSelector(res=>res)
  const {imageSlice} = res;
  console.log(imageSlice)

  return (
    <div className='p-16'> 
    <div className='grid grid-cols-4'>
      {
        imageSlice.map((ele,i)=>(
          <img src={ele}
           key={i} 
           onClick={()=>dispatch(removeImage(i))}
           width={480} 
           alt="images" />
        ))
      }
    </div>
    </div>

  )
}

export default Images