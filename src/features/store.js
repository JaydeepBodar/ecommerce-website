import { configureStore } from "@reduxjs/toolkit";
import productSlice, { singleSlice } from "./Product/productSlice";
import userSlice from "./users/userSlice";
const datastore=configureStore({
    reducer:{ user:userSlice,product:productSlice,singleproduct:singleSlice.reducer}
})
export default datastore;