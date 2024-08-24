import React from 'react'
import { Route, Routes ,} from 'react-router-dom'
import Home from './Home'
import Images from './images'
import Layout from './layout'
import Page404notfound from './404/page404notfound'
import Login from './login'
import Profile from './profile/index'
import Protected from './Protected'
import Post from './post'
import Product from './product'
import Cart from './cart'


function Router() {
  return (
    <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        
        <Route path="/login" element={ <Layout><Login/></Layout>}/>
        <Route element={<Protected/>}>
        <Route path="/image" element={ <Layout><Images/></Layout>}/>
        <Route path="/profile" element={ <Layout><Profile/></Layout>}/>
        <Route path="/post" element={ <Layout><Post/></Layout>}/>
        <Route path="/cart" element={ <Layout><Cart/></Layout>}/>
        </Route>
        <Route path="/product" element={ <Layout><Product/></Layout>}/>
        <Route path="/*" element={ <Layout><Page404notfound/></Layout>}/>
    </Routes>
  )
}

export default Router