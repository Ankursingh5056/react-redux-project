import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {login,logout} from "../redux/Slice/auth.slice"
import { useDispatch } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { erageRememner, setRemember } from '../redux/Slice/remember.slice'

function Login() {
    const [loading,setLoading] = useState(false)
    const [dataerror,setDataerror] = useState(null)
    const auth = useSelector(res=>res.AuthSlice)
    const remember = useSelector(res=>res.rememberSlice)
    console.log(remember)
    
    // console.log(auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[user,setUser] = useState({
        email : remember.email,
        password : remember.password
    })

    const handleInput = (e)=>{
        const input = e.target
        const key = input.name
        setUser({...user,[key] : input.value})
        // setUser((oldData)=>{
        //     return({                   {/*we also write this*/}
        //         ...oldData,
        //         [key] : input.value
        // })
        // })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setDataerror(null)
        setLoading(true)
        try {
            const response = await  axios({
                method : 'post',
                url : "https://reqres.in/api/login",
                data : {
                    username : user.email,
                    password : user.password,
                }
            })
            // console.log(response.data.token)
            setLoading(false)
            setDataerror(null)
            dispatch(login(response.data.token))
            navigate("/profile")
        } catch (error) {
            setDataerror(error.response.data.error)
            setLoading(false)
            console.log(error.response.data.error)
            // dispatch(logout())
        }
    }

    useEffect(()=>{
        if(dataerror){
            setTimeout(()=>{
                setDataerror(null)
            },2000)
        }
    },[dataerror])

    const rememberMe =(e)=>{
        
        if(e.target.checked){
            dispatch(setRemember(user))
        }else{
            dispatch(erageRememner())
        }
    }
   
  return auth.user? <Navigate to={"/"}/> :
  <>
  <div className='flex flex-col gap-y-4 justify-center items-center min-h-screen bg-red-50'>
        {
            dataerror && <div className='w-96 bg-red-400 rounded-lg p-4 border-white flex justify-center items-center'>
            <h1 className='text-white font-semibold'>{dataerror}</h1>
        </div>
        }
    <div className='flex flex-col bg-white gap-y-2 p-4 shadow-xl w-96'>
       
        <h1 className='text-xl font-bold'>login</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-y-3' >
            <div className='flex flex-col gap-y-4 '>
                <label  className='text-slate-600 font-bold ' >username</label>
                <input
               onChange={handleInput}
               value={user.email}
               name='email'
                className='border p-2 border-slate-600 rounded'
                type="email" />
                <label className='text-slate-600 font-bold '> password</label>
                <input 
                 className='border p-2 border-slate-600 rounded'
                 name='password'
                onChange={handleInput}
                value={user.password}
                type="password" />
            </div>
            <div className='flex justify-between '>
                <div>
                <input type="checkbox" checked={remember.checked} onChange={(e)=>rememberMe(e)} label="remember" />
                <label htmlFor="">remember me !</label>
                </div>
                {

                    loading? <button disabled className='bg-gray-400 px-6 py-2 rounded text-white font-semibold'>Loading</button> : <button className='bg-indigo-500 px-6 py-2 rounded text-white font-semibold'>login</button>
                }
                
            </div>
        </form>

    </div>
  </div>
  </>
}
export default Login