import { useEffect , useState } from "react";


function useCurrencyInfo(currency)
{
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.min.json`).then((res)=>res.json()).then((res)=>setData(
            res[currency]));
        // console.log(res.value);
    },[currency])
    console.log(data);
    
    return data
    
}

export default useCurrencyInfo;