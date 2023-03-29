import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { authService } from "./userService";
export const registeUser=createAsyncThunk('auth/register',async (userData,thunkApi)=>{
    try{
        const data= await authService.register(userData);
        return data
    }catch(e){
        return e.response.data.message
    }
})
export const loginUser=createAsyncThunk('auth/loginUser',async (newuserData,thunkApi)=>{
    try{
        const newdata= await authService.login(newuserData);
        return newdata
    }catch(error){
        return await error.response.data.message;
    }
})
const initialState={
    user:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registeUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(registeUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload;
            if(state.isSuccess===true && action.payload === null){
                // localStorage.setItem('token',action.payload)
                toast.success("user registration successfully")
            }else{
                toast.warn(action.payload)
            }
        }).addCase(registeUser.rejected,(state,action)=>{
            state.isError=true;
            state.message=action.payload
            if(state.isError===true){
                toast.error(action.payload)
            }
            // if(state.isError===true){
            //     toast.error(action.payload.message)
            // }
        }).addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;

            if(state.isSuccess===true && action.payload.user){
                toast.success(action.payload.message)
            }else{
                toast.error(action.payload)
            }
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isError=true;
        })
    }
})
export default userSlice.reducer;