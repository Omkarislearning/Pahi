import React ,{useState} from 'react'
import Inner from './Inner'

const DjDetails = ({Path1,Path2,Path3}) => {
    const[photodata,setPhotoData]=useState(
        [
            {
                title:'About Dj Sumit Shenoy, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Cine Photo Shoot, Mumbai',
                description:'DJ Sumit who hails from Mumbai has played alongside with lot of renowned artists from all over the world like Nicola Fasano (Pitbulls Official DJ), Kill the Buzz, Yves v (Tomorrowland resident DJ), Allure, Leon Bolier, Flippers, Madd Maxx, DJ Angelo, Timo Higgs and others. He also did a Hong Kong Tour as the Official DJ for Earl Edgar At the Ritz Carlton International. He is a DJ, Producer and a Radio show host whose eye for detail means his shows are a feast for the eyes and the ears.In Mumbai he plays at Trilogy, EXO, Opa, Kitty Su and many more. DJ Sumit has also been a favourite of the Brands Porsche, Mercedes, BMW, and Tommy Hilfiger. He also got his track signed up with Nivacords Record Label, with 3 Official International Artist Remixes of his Single from the Record Label',
                main_img:'https://media.weddingz.in/images/b572c88ef32c2c1e8f9ffdfb1c66671d/djssc.jpg',
                pic2:'https://media.weddingz.in/images/b78c93b6d36ae7d2fd2993d227e94e2e/djssa.jpg',
                pic3:'https://media.weddingz.in/images/661542dcc10381d4029c98ae17dc87d3/djsse.jpg',
                price:'20000',
                phone:'890989890',
                Address:'Mumbai,India',
                Summary:'DJ Sumit Shenoy is a dj based out of Mumbai . DJ Sumit Shenoys telephone number is 76-66-77-88-99, Facebook page is DJ Sumit Shenoy and address is Mumbai,India. In terms of pricing DJ Sumit Shenoy offers various packages starting at Rs 20,000/-.Has been viewed 39 times and shortlisted by 20 customers over the last month. DJ Sumit Shenoy at guaranteed prices and with peace of mind.',
            }
        ]
    )
    const[photodata2,setPhotoData1]=useState(
        [
            {
                title:'DJ Shaggy, Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Supra Web mumbai',
                description:'Dj Shaggy, Mumbai was started by Amit whose a DJ. They play the best bollywood and EDM music in the town. Contact Dj Shaggy, Mumbai today and check your music requirements for your upcoming events. ',
                main_img:'https://media.weddingz.in/images/eca1846e5ea1d1e8c197ffe2a9ac3f6d/dj-shaggy-music-mumbai.jpg',
                pic2:'https://media.weddingz.in/images/eca1846e5ea1d1e8c197ffe2a9ac3f6d/dj-shaggy-music-mumbai.jpg',
                pic3:'https://media.weddingz.in/images/eca1846e5ea1d1e8c197ffe2a9ac3f6d/dj-shaggy-music-mumbai.jpg',
                price:'1000',
                phone:'890989890',
                Address:'Hub Town Solaris, Andheri East, Mumbai.',
                Summary:'DJ Shaggy is a dj based out of Mumbai . DJ Shaggys telephone number is 76-66-77-88-99, address is Hub Town Solaris, Andheri East, Mumbai In terms of pricing DJ Shaggy offers various packages starting at Rs 1,000/-.Has been viewed 30 times and shortlisted by 0 customers over the last month. book DJ Shaggy at guaranteed prices and with peace of mind.',
            }
        ]
    )
    const[photodata3,setPhotoData3]=useState(
        [
            {
                title:'DJ Mervin , Mumbai',
                text_update:'Updated on: Sat 04 Feb 2023',
                heading:'About Found My Photographer - Mumbai, Mumbai',
                description:'Found My Photographer - Mumbai, Mumbai is a group of like-minded photographers and entrepreneurs who have come together to give India a non-stop shop for all your photography needs. Found My Photographer - Mumbai, Mumbai loves to capture your wedding memories and endeavor to provide quality photography and film services without hurting your pocket.',
                main_img:'https://media.weddingz.in/images/37151055b4c17c3ada4f7880b79e4476/dj_mervin_dj_mumbai_987.jpg',
                pic2:'https://media.weddingz.in/images/ad72e971eee4c69e1230681f547949f0/dj_mervin_dj_mumbai_1495.jpg',
                pic3:'https://media.weddingz.in/images/8240b510c428ac1f7b0c1b9b1a9150ad/dj_mervin_dj_mumbai_1493.jpg',
                price:'10,000',
                phone:'890989890',
                Address:'Marovli Church, Menvil D Mello House, Dham, Chembur, Mumbai',
                Summary:'DJ Mervin is a dj based out of Mumbai . DJ Mervin telephone number is 76-66-77-88-99, Facebook page is DJ Mervin and address is Marovli Church, Menvil D Mello House, Dham, Chembur, Mumbai. DJ Mervin is mainly known for Wedding Reception, Sangeet, Cocktail and Other Social Events..In terms of pricing DJ Mervin offers various packages starting at Rs 10,000/-.Has been viewed 17 times and shortlisted by 4 customers over the last month.Book DJ Mervin at guaranteed prices and with peace of mind.',
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

export default DjDetails