import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const addToCartSlice = createSlice({
    name:"addCart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCartData:(state,action)=>{
            const myCart = state.cart.filter((key)=>{
                if(key.id==action.payload.id)
                {
                    return true;
                }
            })
            if(myCart.length>=1)
            {
                message.error("Item already added!!")
            }
            else{
                state.cart.push(action.payload);
                message.success("Data Successfully added!!")
            }
        },
        qntinc:(state,action)=>{
            for(var i=0; i<state.cart.length; i++)
            {
                if(state.cart[i].id==action.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
        },
        qntdec:(state,action)=>{
            for(var i=0; i<state.cart.length; i++)
            {
                if(state.cart[i].id==action.payload.id)
                {
                    if(state.cart[i].qnty<=1)
                    {
                        state.cart = state.cart.filter(item=>item.id!=action.payload.id);
                        message.success("Item Successfully removed!!")
                    }
                    else{
                    state.cart[i].qnty--;
                    }
                }
            }
        },
        dataDel:(state,action)=>{
            state.cart = state.cart.filter(item=>item.id!=action.payload.id);
            message.success("Item Successfully removed!!")
        }
    }
})
export default addToCartSlice.reducer;
export const{addCartData,qntinc,qntdec,dataDel} = addToCartSlice.actions;