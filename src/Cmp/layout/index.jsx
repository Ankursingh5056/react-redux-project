import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logout } from '../redux/Slice/auth.slice'
import { useNavigate } from 'react-router-dom'
// import CartSlice  from "../redux/Slice/cart.sclice"


const menu =[
    {
        label : "Home",
        to : "/"
    },
    {
        label : "Image",
        to : "/image"
    },
   
    {
        label : "Post",
        to : "/post"
    },
    {
        label : "Products",
        to : "/product"
    },
    {
        label : "Cart",
        to : "/cart",
        budge : true
    },
    {
        label : "Login",
        to : "/login"
    },
]

function Layout(data) {
    const [animate,setAnimate] = useState(null)
    const [popup,setPopup] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(res=>res.AuthSlice)
    const cart = useSelector(res=>res.CartSlice)
//    console.log(cart)
    // console.log(auth)

    const funLogout =()=>{
        dispatch(logout())
        navigate("/")

    }

    const funcPopup = ()=>{
        if(popup){
            setAnimate("animate__animated animate__flipOutX")
            setTimeout(()=>{
                setPopup(false)
            },300)
            // setPopup(false)

        }else{
            setAnimate("animate__animated animate__flipInY")
            setPopup(true)
        }
    }
    return (
    <div>
         <div className='fixed top-0 left-0 z-10 w-full  flex justify-around  items-center bg-slate-900'>
<h1 className='text-white text-2xl font-bold'>ShopSphere</h1>
{/*navbar*/}
<ul className='flex '>
{
menu.map((ele,i)=>(

    (auth.user && ele.to) !== "/login" &&
    <li key={i} className='p-5 hover:bg-red-500 relative'>
        {
            (ele.budge && cart.length  > 0 )&& 
            <div className='absolute top-0 right-0 bg-blue-500 w-8 h-8 rounded-full 
            text-center 
            text-semibold text-white'>
                {
                 cart.length
                }
            </div>
        }
    <Link className="text-white" to={ele.to}>{ele.label}</Link>
</li>
   
))
}
{
auth.user && 
<li className='relative flex items-center'>
    <button 
    // onClick={()=>setPopup(!popup)} 
    onClick={funcPopup}
    className='overflow-hidden w-8 h-8 bg-orange-600 rounded-full'>
        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
         alt="dumy"
         className='w-full h-full' /> 
    </button>
   {
    popup &&
    <div className={`bg-white shadow-lg flex flex-col absolute top-16 border rounded
    ${animate}`}>
    <Link to={"/profile"} className='px-4 py-2 hover:bg-indigo-600 hover:text-white text-left'>My profile</Link>
    <button className='px-4 py-2 hover:bg-indigo-600 hover:text-white text-left'>ankurrajut931567@gmail.com</button>
    <button 
    onClick={funLogout}
    className='px-4 py-2 hover:bg-indigo-600 hover:text-white text-left'>Logout</button>
</div>
   }
</li>
}
</ul>

</div>
        
                
            <div>
                {/*body*/}
                {data.children}</div>
            <div className='bg-slate-600 p-32'>
                <h1 className='animate__animated animate__bounce text-white text-6xl font-bold'>Footer</h1>
            </div>
    </div>
  )
}

export default Layout
