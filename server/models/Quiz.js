const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    quizName: String,
    Questions: [{
        qn:String,
        a:String,
        b:String,
        c:String,
        d:String,
        ans: {
            type: String,
            enum: ["a","b","c","d"]
        }
    }],
    user: {type:mongoose.Schema.Types.ObjectId, ref:'User'}
   
})

const QuizModel = mongoose.model('Quiz',QuizSchema)

module.exports = QuizModel