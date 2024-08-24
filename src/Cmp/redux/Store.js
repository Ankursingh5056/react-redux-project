

import  {combineReducers, configureStore}  from "@reduxjs/toolkit"
import imageSlice from "./Slice/image.slice"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import AuthSlice from "./Slice/auth.slice"
import rememberSlice from "./Slice/remember.slice"
import PostSlice from "./Slice/post.slice"
import productSlice from "./Slice/product.slice"
import CartSlice from "./Slice/cart.sclice"

const config = {
    key : "root",
    version : 1,
    storage : storage,
    blackelist : ["PostSlice","imageSlice","productSlice"]
}

const slices = combineReducers({
        imageSlice : imageSlice,
        AuthSlice ,
        rememberSlice,
        PostSlice,
        productSlice,
        CartSlice

})

const Store = configureStore({
    reducer : persistReducer(config,slices),
    devTools : true,
    middleware : (setup)=>setup({
        serializableCheck : false
    })
})


export default Store