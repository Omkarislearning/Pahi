
import React ,{useState} from 'react'
import VendorsDisplay from './Vendors'
import '../App.css'
const CaterersData = () => {
    const [catererdata,setDjData]=useState(
        [
            {
                Img:"https://media.weddingz.in/images/0efee4e58e2b1de110508d7e80f67c3c/green-leaf-caterers-caterers-mumbai.jpg",
                Title:'Green Leaf Cateres',
                VenderType:'Price per Plate',
                Price:'1400',
                Description:'World class level experience with your kind of budget, this is what they are experts at Book them for an event coming up in your family and impress your clients with wholesome new variety of food',
                Link:'/Caterers/Caterers-Details/1'
            },
            {
                Img:"https://media.weddingz.in/images/0e064b63a6c895019acb963cabc91fbf/mini_punjab_caterers_mumbai_5034.jpg",
                Title:'Mini Mumbai Caterers',
                VenderType:'Price per Plate',
                Price:'2000',
                Description:'Found My Photographer - Mumbai, Mumbai is a group of like-minded photographers and entrepreneurs who have come together to give India a non-stop shop for all your photography needs. Found My Photographer - Mumbai, Mumbai loves to capture your wedding memories and endeavor to provide quality photography and film services without hurting your pocket.',
                Link:'/Caterers/Caterers-Details/2'
            },
            {
                Img:"https://media.weddingz.in/images/d9145bf9868210b68d58ca0bfe982bce/Akshaya.jpg",
                Title:'Akshaya Caterers',
                VenderType:'PhoPrice per Plate',
                Price:'3000',
                Description:'Found My Photographer - Mumbai, Mumbai is a group of like-minded photographers and entrepreneurs who have come together to give India a non-stop shop for all your photography needs. Found My Photographer - Mumbai, Mumbai loves to capture your wedding memories and endeavor to provide quality photography and film services without hurting your pocket.',
                Link:'/Caterers/Caterers-Details/3'
            },

        ]
    )
   
  return (
    <div className='Main_Vendors'>
        
            {
                catererdata.map((ele,index)=>
                (
                   <VendorsDisplay key={index} Data={ele} />
                ))   
            }
        
    </div>
  )
}

export default CaterersData