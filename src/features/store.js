import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/userSlice";
const datastore=configureStore({
    reducer:{ user:userSlice}
})
export default datastore;