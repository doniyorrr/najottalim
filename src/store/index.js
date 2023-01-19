import { configureStore } from "@reduxjs/toolkit";
import login from "./Auth"
import product from "./Product"


  const store = configureStore({
    reducer:{
        login,
        product
    }
})
export default store