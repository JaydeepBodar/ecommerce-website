import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Product/productSlice";
import userSlice from "./users/userSlice";
const datastore=configureStore({
    reducer:{ user:userSlice,product:productSlice}
})
export default datastore;