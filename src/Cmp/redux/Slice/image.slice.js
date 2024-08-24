
// we can say reducer or slice file
import { createSlice } from "@reduxjs/toolkit"
const ImagesSlice = createSlice({
    name : "Ankur",
    initialState : [],
    reducers : {
        addImages(state,action){ // we can call actions
            state.push(action.payload)
        },
        removeImage(state,action){  // we can call actions
            state.splice(action.payload,1)
        },
        resetImage(state){  // we can call actions
           return state = []
        }
    }
})


export const {addImages,removeImage,resetImage} = ImagesSlice.actions
export default ImagesSlice.reducer