import axios from "axios";
import { pro_url } from "../../utils/axiosConfig";
const productdata=async()=>{
    const resp=await axios.get(`${pro_url}/product`)
    if(resp.data){
        return resp.data
    }   
}
export const products={
    productdata
}