import React, { useState } from 'react'
import '../App.css';
import VendorsDisplay from './Vendors'
const Dj = () => {

    const [djdata,setDjData]=useState(
        [
            {
                Img:"https://media.weddingz.in/images/f986558f9f1078129cc9f66ace3ba5a4/djssc.jpg",
                Title:'Dj Shaggy',
                VenderType:'Price package',
                Price:'24000',
                Description:'World class level experience with your kind of budget, this is what they are experts at Book them for an event coming up in your family and impress your clients with wholesome new variety of food',
            },
            {
                Img:"https://media.weddingz.in/images/103814cbac23e49d020b0c9a1f712e01/dj-shaggy-music-mumbai.jpg",
                Title:'Dj prince',
                Vender:'Price Package',
                Price:'40000',
                Description:'Found My Photographer - Mumbai, Mumbai is a group of like-minded photographers and entrepreneurs who have come together to give India a non-stop shop for all your photography needs. Found My Photographer - Mumbai, Mumbai loves to capture your wedding memories and endeavor to provide quality photography and film services without hurting your pocket.',
            },
            {
                Img:"https://media.weddingz.in/images/37151055b4c17c3ada4f7880b79e4476/dj_mervin_dj_mumbai_987.jpg",
                Title:'Dj Merlin',
                VenderType:'Price Package',
                Price:'3000',
                Description:'Found My Photographer - Mumbai, Mumbai is a group of like-minded photographers and entrepreneurs who have come together to give India a non-stop shop for all your photography needs. Found My Photographer - Mumbai, Mumbai loves to capture your wedding memories and endeavor to provide quality photography and film services without hurting your pocket.',
            },

        ]
    )
  return (
    <div className='Main_Vendors'>
        {
         djdata.map((ele,index)=>
         (
            <VendorsDisplay key={index} Data={ele} />
         ))   
        }
    </div>
  )
}

export default Dj