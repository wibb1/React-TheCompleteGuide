import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice =()=>{
  createSlice({name:cartSlice, initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action){
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      if(!existingItem){
        state.items.push({itemId: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title})
      } else {
        existingItem.quantity++,
        existingItem.totalPrice = existingItem.price * existingItem.quantity,
      }

    },
    removeItem(state, action){
      const removedItem = action.payload
      const exitingItem = state.items.find(item => item.id === removedItem.id)
    },

  }
})
  
}

export default cartSlice