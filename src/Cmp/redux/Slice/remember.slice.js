import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        checked : false,
        email : "",
        password : ""
    }

const RememberSlice = createSlice({
    name : "remember",
    initialState,
    // initialState :
    //     {
    //         checked : false,
    //         email : "",
    //         password : ""
    //     },
    
    reducers : {
        setRemember(state,action){
            // state.checked = true,
            // state.email = action.payload.email,
            // state.password = action.payload.password

            return state = {
                ...action.payload,
                checked : true
            }
        },
        erageRememner(state){
        //  state.checked = false,
        //  state.email = "",
        //  state.password = ""
        return state = initialState
        }
    }

})

export const {setRemember,erageRememner} = RememberSlice.actions;
export default RememberSlice.reducer