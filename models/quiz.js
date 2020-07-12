const mongoose = require('mongoose')
const QuizSchema = new mongoose.Schema({
  title:String,
  Deadline:Number,
  time:Number,
  totalMarks:Number,

  question:[ 
  {
   que: String, 
   option1:String, 
   option2:String, 
   option3: String, 
   option4: String, 
   answer: String, 
       //required: true 
  }
]

});



module.exports = mongoose.model('Quiz', QuizSchema);
