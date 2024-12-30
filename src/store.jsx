import { configureStore } from "@reduxjs/toolkit";
// import mydata from "./addToCartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import myReducer from "./addToCartSlice";

const persistConfig = {
    key: "root",
    storage,
  };
const persistedReducer = persistReducer(persistConfig, myReducer);
const store = configureStore({
    reducer:{
        addCart:persistedReducer
    }
})
export default store;
export const persitor = persistStore(store);