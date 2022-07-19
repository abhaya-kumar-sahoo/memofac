import React,{useEffect} from "react";

import * as rdd from 'react-device-detect';
export const Redirect=()=> {


useEffect(()=>{
if (rdd.osName==="iOS") {
  window.location.href = 'https://www.memofac.com/download';
} else {
  window.location.href = 'https://play.google.com/store/apps/details?id=com.memofac';

}
},[]) 

  return <></>
}

