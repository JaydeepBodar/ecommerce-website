import axios from "axios";
import { aut_url,log_url } from "../../utils/axiosConfig";
const register=async(userData)=>{
    const resp=await axios.post(`${aut_url}/signup`,userData);
    if(resp.data){
        return resp.data
    }   
}
const login=async(newuserData)=>{
    const newresp=await axios.post(`${log_url}/login`,newuserData);
    if(newresp.data){
        return newresp.data
    }   
}
export const authService={
    register,login
}