const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const User = require('./models/User')
const Quiz = require('./models/Quiz')
const app = express() 

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://quiz:B33rxzYhGf8wL8tH@cluster0.0fbv2pq.mongodb.net/?retryWrites=true&w=majority')

var userInfo;
var userId;

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
    const passOk = password===userDoc.password
    if (passOk) {
        // Logged In
        userInfo = userDoc
        userId = new mongoose.Types.ObjectId(userInfo.id)
    } else {
        res.status(400).json('wrong credentials')
    }
    res.json({1: password,2: userDoc.password,3: password===userDoc.password})
})

app.get('/home',(req,res)=>{
    res.json({username: userInfo.username,id: userId})
})

app.post('/quiz',async(req,res)=>{
    const {quizName,Questions} = req.body
    try{
        const QuizSet = await Quiz.create({quizName,Questions,user:userId})
        res.json(QuizSet)
    } catch (e) {
        res.status(500).json("Quiz not created")
    }
    
})

app.get('/viewquiz',async(req,res)=>{
    const userQuizzes = await Quiz.find()
    res.json(userQuizzes)
})

app.get('/search',async(req,res)=>{
    const users = await User.find().select('username')
    res.json(users)
})

app.post('/logout',(req,res)=>{
    userInfo = null
    res.json("logged out")
})
app.listen(9000)


// mongodb+srv://quiz:B33rxzYhGf8wL8tH@cluster0.0fbv2pq.mongodb.net/?retryWrites=true&w=majority
// B33rxzYhGf8wL8tH