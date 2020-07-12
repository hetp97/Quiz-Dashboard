const express = require('express');
const bodyParser = require('body-parser');
const app=express()
const api=require('./routes/user');
const cors = require('cors');
const { models } = require('mongoose');
const router = require('./routes/user');

app.use(cors());
const Quiz = require('./models/quiz');
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    
    next();
});

app.use(bodyParser.json())
app.use('/api', api);

app.post('/create-quiz', (req, res) => {
  let quiz= new Quiz(req.body);
  quiz.save((err,data)=>{
      if(err){
          res.json({success:false, msg:'failed to ccreate quiz'});
      }
      else{
          console.log(data);
          return res.json({success:true, msg:'Quiz created'});
      }
  });
        
    });
    
    
    

app.get('/', (req, res) => {
    res.send('H3ll0 W0RlD')
})


app.listen(5400,()=>{
    console.log('Server is running on port: 5400');
})