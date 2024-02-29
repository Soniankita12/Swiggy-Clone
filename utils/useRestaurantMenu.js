import { useEffect, useState } from "react";
import { Menu_List_Api } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo ,setresInfo] =useState(null)
   useEffect(()=>{
   fetchData();
   },[]);
const fetchData =  async()=>{
    const data =await fetch(Menu_List_Api+resId);
   const  json =await data.json();
   console.log("resmenu",json);
   setresInfo(json.data);
   
}


    return resInfo;
}
export default useRestaurantMenu;