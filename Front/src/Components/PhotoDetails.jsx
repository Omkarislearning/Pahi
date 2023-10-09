import React, { useState } from 'react'
import Inner from './Inner'


const PhotoDetails = ({Path1,Path2,Path3}) => 
{
    const[photodata,setPhotoData]=useState(
        [
            {
                title:'Cine Photo Shoot, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Cine Photo Shoot, Mumbai',
                description:'Cine Photo Shoot, Mumbai believes that photography is not only about presentation, its about bringing out the expression and capturing the essence of each moment. Art is for everyone and that is why they have creative concepts customized for every occasion. A team of cinematographers and photographers with a creative mindset with over 4 years of experience. While “Lights! Camera! Action!” and Candid Wedding Photography is their Forte, they lend each clicks-happy charm for Events like - Short Films, Corporate Ads, Music Videos, Product Photoshoots, Portfolio Photoshoots, Event Photography, Engagement, Pre & Post Wedding, Cinemagraph, Cinematic Videos, Episodes and Funny Videos, Helicam & Drone Photography, Baby Photoshoots, & Customised Album too. Go ahead and contact Cine Photo Shoot, Mumbai to discuss your event needs.',
                main_img:'https://media.weddingz.in/images/b59adb84634c6d14bfb129d7f975d792/cine-photo-shoot-photographer-mumbai-2.jpg',
                pic2:'https://media.weddingz.in/images/3dec87de1968f9e8848e128e240a6674/cine-photo-shoot-riddhi-x-kevin-mumbai.jpg'
                ,
                pic3:'https://media.weddingz.in/images/0b2247da0eddbbe83a56ca2d58e30faf/cine-photo-shoot-riddhi-x-kevin-mumbai-1.jpg',
                price:'130000',
                phone:'890989890',
                Address:'11/3, Anand Sagar Building, Lady Harding Road, VSNL Colony, Mahim, Mumbai, Maharashtra 400016',
                Summary:'Cine Photo Shoot is a Wedding Photographer based out of Mumbai . Cine Photo Shoots telephone number is 76-66-77-88-99, Cine Photo Shoot website address is https://www.cinephotoshoot.com, address is 11/3, Anand Sagar Building, Lady Harding Road, VSNL Colony, Mahim, Mumbai, Maharashtra 400016 In terms of pricing Cine Photo Shoot offers various packages starting at Rs 15000/-. Has been viewed 43 times and shortlisted by 0 customers over the last month.There are 5 albums here at Weddingz -- suggest you have a look. Call weddingz.in to book Cine Photo Shoot at guaranteed prices and with peace of mind',
            }
        ]
    )
    const[photodata2,setPhotoData1]=useState(
        [
            {
                title:'Supra Web mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Supra Web mumbai',
                description:'Cine Photo Shoot, Mumbai believes that photography is not only about presentation, its about bringing out the expression and capturing the essence of each moment. Art is for everyone and that is why they have creative concepts customized for every occasion. A team of cinematographers and photographers with a creative mindset with over 4 years of experience. While “Lights! Camera! Action!” and Candid Wedding Photography is their Forte, they lend each clicks-happy charm for Events like - Short Films, Corporate Ads, Music Videos, Product Photoshoots, Portfolio Photoshoots, Event Photography, Engagement, Pre & Post Wedding, Cinemagraph, Cinematic Videos, Episodes and Funny Videos, Helicam & Drone Photography, Baby Photoshoots, & Customised Album too. Go ahead and contact Cine Photo Shoot, Mumbai to discuss your event needs.',
                main_img:'https://media.weddingz.in/images/c78255df3a6b1645dcaa2c98d2f6fbf1/supraweb-photographer-mumbai.jpg',
                pic2:'https://media.weddingz.in/images/c78255df3a6b1645dcaa2c98d2f6fbf1/supraweb-photographer-mumbai.jpg',
                pic3:'https://media.weddingz.in/images/c78255df3a6b1645dcaa2c98d2f6fbf1/supraweb-photographer-mumbai.jpg',
                price:'50000',
                phone:'890989890',
                Address:'No 5 /6, Prince Tower, Ramsheth Thakur School Rd, Turbhe Store, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210, India',
                Summary:'Supraweb is a Wedding Photographer based out of Mumbai . Suprawebs telephone number is 76-66-77-88-99, Supraweb website address is http://www.supraweb.in/, Facebook page is Supraweb and address is No 5 /6, Prince Tower, Ramsheth Thakur School Rd, Turbhe Store, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210, India.In terms of pricing Supraweb offers various packages starting at Rs 50,000/-.Has been viewed 4 times and shortlisted by 0 customers over the last month.There are 0 albums here at Weddingz -- suggest you have a look. Call weddingz.in to book Supraweb at guaranteed prices and with peace of mind.',
            }
        ]
    )
    const[photodata3,setPhotoData3]=useState(
        [
            {
                title:'Found My Photographer - Mumbai, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Found My Photographer - Mumbai, Mumbai',
                description:'Found My Photographer - Mumbai, Mumbai is a group of like-minded photographers and entrepreneurs who have come together to give India a non-stop shop for all your photography needs. Found My Photographer - Mumbai, Mumbai loves to capture your wedding memories and endeavor to provide quality photography and film services without hurting your pocket.',
                main_img:'https://media.weddingz.in/images/3b4ea51b263940fdf73caf4c20fd096c/found-my-photographer-mumbai-photographer-mumbai.jpg',
                pic2:'https://media.weddingz.in/images/84402b9c54e05c49daebe3e550fa354d/found-my-photographer-mumbai-new-album-mumbai-17.jpg',
                pic3:'https://media.weddingz.in/images/3dc23c02a9fa2c63fa635a88da27fa78/found-my-photographer-mumbai-new-album-mumbai-24.jpg',
                price:'1,10,000',
                phone:'890989890',
                Address:'No 5 /6, Prince Tower, Ramsheth Thakur School Rd, Turbhe Store, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210, India',
                Summary:'Supraweb is a Wedding Photographer based out of Mumbai . Suprawebs telephone number is 76-66-77-88-99, Supraweb website address is http://www.supraweb.in/, Facebook page is Supraweb and address is No 5 /6, Prince Tower, Ramsheth Thakur School Rd, Turbhe Store, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210, India.In terms of pricing Supraweb offers various packages starting at Rs 50,000/-.Has been viewed 4 times and shortlisted by 0 customers over the last month.There are 0 albums here at Weddingz -- suggest you have a look. Call weddingz.in to book Supraweb at guaranteed prices and with peace of mind.',
            }
        ]
    )
  return (
    <>
    {
        Path1 ? 
        (
            
                            
                            photodata.map((ele,index)=>(
                                
                                <Inner key={index} Data={ele} />
                
                            ))
                    
             
        )
        :Path2 ?
        (
            
                            
                            photodata2.map((ele,index)=>(
                                
                                <Inner key={index} Data={ele} />
                
                            ))
                    
            
        )
        :Path3 ?
        (
            
                            
                            photodata3.map((ele,index)=>(
                                
                                <Inner key={index} Data={ele} />
                
                            ))
                    
            
        )
        :
        (
            photodata2.map((ele,index)=>(
                                
                <Inner key={index} Data={ele} />

            ))  
        )
    }
    
       
       
        
    </>

   
  )
}

export default PhotoDetails