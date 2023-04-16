import { createSlice } from '@reduxjs/toolkit'

const initialData ={
    count:0,
    total:0,
    data:[]
} 
// console.log(state)
export const carSlice = createSlice({
    name: 'car',
    initialState: initialData,
    reducers: {
        addProduct:(state,action)=>{
            state.data = [...state.data, action.payload]
            state.count=state.count+1;
            state.total= (state.total+(action.payload.count* action.payload.price))

        },
        deleteProduct:(state,action)=>{

            state.data = state.data.filter((product)=> product.id != action.payload)
            state.count=state.count-1;
            const subtotals = state.data.map(product => product.count * product.price)
            // mañana ver si esta solución se puede mejorar
            if(state.data.length<1){ state.total = 0}
            subtotals.map((subtotal)=>{
                state.total = (state.count + subtotal); 
            })
        },
        editProduct:(state,action)=>{

            state.data.map((product)=>{return product.id == action.payload.id ? product.count = action.payload.count : product} ) 
        }
    }
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, carTotal } = carSlice.actions

export default carSlice.reducer