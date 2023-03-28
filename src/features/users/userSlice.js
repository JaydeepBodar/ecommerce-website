import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { authService } from "./userService";
export const registeUser=createAsyncThunk('auth/register',async (userData,thunkApi)=>{
    try{
        const data= await authService.register(userData);
        console.log('sddsdsds',data)
        return data
    }catch(e){

    }
})
export const loginUser=createAsyncThunk('auth/loginUser',async (userData,thunkApi)=>{
    try{
        const newdata= await authService.login(userData);
        console.log('vbhjgyy',data)
        return newdata
    }catch(e){

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
            if(state.isSuccess===true && action.payload.message == null){
                toast.success("user registration successfully")
            }else{
                toast.warn(action.payload.message)
            }
        }).addCase(registeUser.rejected,(state,action)=>{
            state.isError=true;
            state.message=payload.message;
            if(state.isError===true){
                toast.error(action.payload.message)
            }
        }).addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload;
            if(state.isSuccess===true){
                toast.success("user login successfully")
            }else{
                toast.warn(action.payload.message)
            }
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isError=true;
            state.message=payload.message;
            if(state.isError===true){
                toast.error(payload.message)
            }
        })
    }
})
export default userSlice.reducer;