import React ,{useState }from 'react'
import VendorsDisplay from './Vendors'
import '../App.css';
import { useEffect } from 'react';
import axios from 'axios'


const PhotoData = () => {
    const [Photodata,SetphotoData]=useState([]);

    useEffect(()=>{

            async function fecthdata()
            {
                const req = await axios.get("http://localhost:8000/Photographer");
                SetphotoData(req.data)
               
            }
            fecthdata();
    },[])
    

  return (
    <>
     <div className='Main_Vendors'>
        {
            Photodata.map((ele,index)=>
            (
                <VendorsDisplay key={index} Data={ele}/>                 
            ))
        } 
    </div>
    </>
   
  )
 
}

export default PhotoData