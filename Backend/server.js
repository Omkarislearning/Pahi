//importing

require('dotenv').config
const express = require('express');
const Cors = require('cors');

const mongoose = require('mongoose');




//initialize
const app = express();


//middlewares
app.use(Cors());
app.use(express.json())


// database url
const connection_url='mongodb+srv://omkaranvekar009:omkar@cluster0.kmbahv8.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_url) .then(() => console.log("Connected to Mongo"))
.catch((err) => console.log("Messages" + err));




//Database setup model
 const photos= new mongoose.Schema({
    Img:
    {
        type:String,
        required:true
    },
    Title:
    {
        type:String,
        required:true
    },
    VendorType:
    {
        type:String,
        required:true
    },
    Price:
    {
        type:String,
        required:true
    },
    Description:
    {
        type:String,
        required:true,
    },
    Link:{
        type:String,
        required:true
    }
 });


const photosdatabase=mongoose.model('Photos_vendor',photos)
var PORT=process.env.PORT || 8000



app.post("/Photographer",async(req,res)=>
{
    try
    {
        const data=new photosdatabase(
            {
                Img: req.body.Img,
                Title: req.body.Title,
                VendorType: req.body.VendorType,
                Price: req.body.Price,
                Description: req.body.Description,
                Link: req.body.Link,
            }
        );
        await data.save()
        res.status(201).json(data)
       
    }
    catch(err)
    {
        res.status(500).json({ message: err.message });
    }
})

app.get("/Photographer",(req,res)=>
{
    photosdatabase.find().then(function(data)
    {
        res.status(201).send(data)
        console.log(data)
    }).catch(function(err)
    {
        res.status(404).send(err)
        console.log(err)
    })
})






//listening 
app.listen(PORT,()=>(console.log(`Server Running on ${PORT}`)))