import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../pages/products/ProductSlice";

export default configureStore({
  reducer : {
    products: productReducer
  }
})