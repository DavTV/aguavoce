import {configureStore } from '@reduxjs/toolkit'
import carReducer from '../reducers/car/carSlice.js'
export default configureStore({
    reducer:{
        car: carReducer,
       
    }  
})