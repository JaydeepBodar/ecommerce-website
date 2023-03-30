import axios from "axios";
import { useParams } from "react-router-dom";
import { pro_url } from "../../utils/axiosConfig";
const productdata=async()=>{
    const resp=await axios.get(`${pro_url}/product`)
    if(resp.data){
        return resp.data
    }   
}
const Indivisualproduct=async(id) => {
    const resp=await axios.get(`${pro_url}/product/${id}`);
    if(resp.data){
        return resp.data;
    }   
}
export const products={
    productdata,Indivisualproduct
}