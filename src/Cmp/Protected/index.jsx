import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'

function Protected() {
  const auth = useSelector(res=>res.AuthSlice)
  const {user} = auth 
  return user? <Outlet/> : <Navigate to={"/login"}/>
}

export default Protected