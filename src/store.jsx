import { configureStore } from "@reduxjs/toolkit";
import mydata from "./addToCartSlice";
const store = configureStore({
    reducer:{
        addCart:mydata
    }
})
export default store;