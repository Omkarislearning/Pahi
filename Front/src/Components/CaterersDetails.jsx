import React ,{useState}from 'react'
import Inner from './Inner'
const CaterersDetails = ({Path1,Path2,Path3}) =>
{
    const[photodata,setPhotoData]=useState(
        [
            {
                title:'Green Leaf Caterers, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Green Leaf Caterers, Mumbai',
                description:'World class level experience with your kind of budget, thats right, this is what they are experts at. Book them for an event coming up in your family and impress your clients with wholesome new variety of food.',
                main_img:'https://media.weddingz.in/images/587d2d548a03e251246b7214fe6125a6/green-leaf-caterers-caterers-mumbai.jpg',
                pic2:'https://media.weddingz.in/images/50afed995764754e6f41f9445370a7a6/green-leaf-caterers-few-more-mumbai-2.jpg',
                pic3:'https://media.weddingz.in/images/50afed995764754e6f41f9445370a7a6/green-leaf-caterers-few-more-mumbai-2.jpg',
                price:'450 Per Plate',
                phone:'890989890',
                Address:'Andheri , East',
                Summary:'Green Leaf Caterers is a caterer based out of Mumbai . Green Leaf Catererss telephone number is 9004277771, address is Andheri East.In terms of pricing Green Leaf Caterers offers various packages starting at Rs 450/-.Has been viewed 0 times and shortlisted by 0 customers over the last month to book Green Leaf Caterers at guaranteed prices and with peace of mind.',
            }
        ]
    )
    const[photodata2,setPhotoData1]=useState(
        [
            {
                title:'Mini Punjab, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Mini Punjab, Mumbai',
                description:'Mini Punjab is a leading brand in outdoor catering services. They offer world-class food and hospitality. They can make any event sparkle with their expertise, as they specialize in outdoor catering.  ',
                main_img:'https://media.weddingz.in/images/aa0a0318707d09aaee5a1206c9dbe859/mini_punjab_caterers_mumbai_5034.jpg',
                pic2:'https://media.weddingz.in/images/b7eaf23732d652e4102ec0e40b381405/mini_punjab_caterers_mumbai_5014.jpg',
                pic3:'https://media.weddingz.in/images/e127ac97f33e70a7206ff7f4b4492496/mini_punjab_caterers_mumbai_5017.jpg',
                price:'920 Per Plate',
                phone:'890989890',
                Address:'G.T.B. Nagar, Everard Nagar, Sion, Mumbai',
                Summary:'Mini Punjab is a caterer based out of Mumbai . Mini Punjabs telephone number is 76-66-77-88-99, Mini Punjab address is G.T.B. Nagar, Everard Nagar, Sion, Mumbai Mini Punjab is mainly known for Wedding Catering, Party Catering , Marriage Catering Services.In terms opricing Mini Punjab offers various packages starting at Rs 920/-Has been viewed 154 times and shortlisted by 2 customers over the last month.There are 1 albums here at Weddingz -- suggest you have .in to book Mini Punjab at guaranteed prices and with peace of mind.',
            }
        ]
    )
    const[photodata3,setPhotoData3]=useState(
        [
            {
                title:'Akshaya Caterers, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Akshaya Caterers, Mumbai',
                description:'Akshaya Caterers, Mumbai offer options of choosing from a simple pre-packaged catering menu or a customized menu that could fit your unique taste and budget. Their main aim is to ensure the complete satisfaction of every customer and their guest, while offering professional but personalized service throughout the event.',
                main_img:'https://media.weddingz.in/images/2333f9dd4ee2acaf9ad1c70dd27ce432/Akshaya.jpg',
                pic2:'https://media.weddingz.in/images/2333f9dd4ee2acaf9ad1c70dd27ce432/Akshaya.jpg',
                pic3:'https://media.weddingz.in/images/1feebb85c4266a817d7e368557a5dc57/banyan-tree-hospitality-menu-choices-mumbai-5.jpg',
                price:'500 Per Plate',
                phone:'890989890',
                Address:'Sufala CHS, B.R. Road, Opp. Model Town,Mulund (West)',
                Summary:'Akshaya Caterers is a caterer based out of Mulund, Mumbai . Akshaya Catererss telephone number is 76-66-77-88-99, address is Sufala CHS, B.R. Road, Opp. Model Town,Mulund (West)In terms of pricing Akshaya Caterers offers various packages starting at Rs 500/-. book Akshaya Caterers at guaranteed prices and with peace of mind.',
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

export default CaterersDetails