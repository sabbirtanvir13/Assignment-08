import axios from "axios";
import { useEffect, useState } from "react"

const useApps=()=>{
    const [apps,setapps]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null)

    useEffect(()=>{
        setloading(true)
        axios('/socialAppData.json').then(data=>setapps(data.data))
        .catch(err=>seterror(err))
        .finally(()=>setloading(false))
    },[])
    return{
        apps,loading,error
    }
}
export default useApps