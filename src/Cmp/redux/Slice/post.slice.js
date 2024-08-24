import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState= {
    loading : null,
    error : null,
    data : null

}

const PostSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        // setPost(state,action){
        //     state.loading = true,
        //     state.error = null,
        //     state.data = action.payload
        // }
        setLoading(state,action){
            state.loading = action.payload
        },
        setData(state,action){
            state.data = action.payload
        },
        setError(state,action){
            state.error = action.payload
        }
    }
})

// export const {setPost} = PostSlice.actions;
export const {setLoading,setError,setData} = PostSlice.actions;
export default PostSlice.reducer

export const getPost=()=>{
    return async(dispatch)=>{
        dispatch(setLoading(true))
        dispatch(setError(false))
        try {
            const response = await axios({
                method : "get",
                url : "https://reqres.in/api/users"
            })
            
            // console.log(response.data.data)
            dispatch(setLoading(false))
            dispatch(setError(false))
            dispatch(setData(response.data.data))
        } catch (Error) {
            console.log(Error)
            dispatch(setData(false))
            dispatch(setLoading(false))
            dispatch(setError(true))
        }
    }
}