import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
  currency.toUpperCase();
  const [data , setData] = useState({})
  useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/1b0810732585a7306880a080/latest/${currency}`)
    // .then(res => {console.log(typeof(res))})
    .then(res => res.json())
    .then(res => setData(res.conversion_rates))

  } , [currency])
  // console.log(data)
  return data;
}

export default useCurrencyInfo;