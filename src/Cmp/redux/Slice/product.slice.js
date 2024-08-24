import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : null,
    err  : null,
    data : null,

}
// const ProductSlice = createSlice({
//     name : "product",
//     initialState,
//     reducers : {
//         setData(state,action){
//             state.data = action.payload
        
//         },
//         setLoading(state,action){
//             state.loading = action.payload
        
//         },
//         setError(state,action){
//             state.err = action.payload
        
//         }
//     }
// })

// export const {setData,setError,setLoading} = ProductSlice.actions;
// export default ProductSlice.reducer

// export const getProduct = () => async(dispatch)=>{
//     try {
//         dispatch(setLoading(true))
//         const response  = await  axios({
//             method : "get",
//             url : 'https://fakestoreapi.com/products'
//         })
//         console.log(response.data)
//         dispatch(setData(response.data))
//         dispatch(setError(false))
//         dispatch(setLoading(false))
//     } catch (error) {
//         dispatch(setData(null))
//         dispatch(setLoading(false))
//         dispatch(setError(error.response.data))
//     }
// }

const productSlice = createSlice({
    name : "product Page",
    initialState,
    extraReducers : (res)=>{
        res
        .addCase(getProduct.pending,(state)=>{
            state.loading = true
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.loading = false,
            state.data = action.payload
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.loading = false,
            state.data = null,
            state.err = action.payload
        })
    }
})
export default productSlice.reducer

export const getProduct = createAsyncThunk("getProduct",async()=>{
    try {
        const {data} = await axios({
            method : "get",
            url : "https://fakestoreapi.com/products"
        })
        return data
    } catch (error) {
        return error.response.data
    }
})