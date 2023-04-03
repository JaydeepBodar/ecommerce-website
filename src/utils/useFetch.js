import React,{useEffect,useState} from 'react'
import axios from 'axios';
const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [loading,setloading]=useState(true)
    const [isError, setisError] = useState('');
    useEffect(() => {
      axios
        .get(url)
        .then((r) => {setdata(r.data); setloading(false)})
        .catch((err) => setisError(err));
    },[]);
    return ({data,loading,isError})
}

export default useFetch;
