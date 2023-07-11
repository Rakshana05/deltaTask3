const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const User = require('./models/User')
const app = express() 

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://quiz:B33rxzYhGf8wL8tH@cluster0.0fbv2pq.mongodb.net/?retryWrites=true&w=majority')

app.post('/register',async(req,res)=>{
    const {username,password,confirmpassword} = req.body
    if(password===confirmpassword){
        try{
            const userDoc = await User.create({username,password})
            res.json(userDoc)
        }catch(e) {
            res.status(400).json(e)
        }
        
    }else{
        res.status(400).json("Password not matching")
    }
    
})

app.post('/',async (req,res)=>{
    const {username,password} = req.body
    const userDoc = await User.findOne({username})
    res.json(userDoc)
})
app.listen(9000)


// mongodb+srv://quiz:B33rxzYhGf8wL8tH@cluster0.0fbv2pq.mongodb.net/?retryWrites=true&w=majority
// B33rxzYhGf8wL8tH