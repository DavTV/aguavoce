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
            alert("Producto agragado satisfactoriamente.")

        },
        deleteProduct:(state,action)=>{
            let resp = confirm("Deseas eliminar ete producto ?");
            if(resp){
                state.data = state.data.filter((product)=> product.id != action.payload)
                state.count=state.count-1;
                const subtotals = state.data.map(product => product.count * product.price)
                let total = 0;
                subtotals.map((subtotal)=>{
                    total = total+ subtotal;
                })
                state.total = total; 

            }

        },
        editProduct:(state,action)=>{
            state.data.map((product)=> product.id == action.payload.id ? product.count = action.payload.count : product)
            const subtotals = state.data.map(product => product.count * product.price)
            console.log(subtotals)
            let total = 0;
            subtotals.map((subtotal)=>{
                total = total+ subtotal;
            })
            state.total = total; 
        }
    },


})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, editProduct } = carSlice.actions

export default carSlice.reducer