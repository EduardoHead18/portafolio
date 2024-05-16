import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './futures/modeSlice'

export default configureStore({
    reducer:{
        mode:modeReducer
    }
})