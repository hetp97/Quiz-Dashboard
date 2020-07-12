const express = require('express');
const router =  express.Router()
const mongoose= require('mongoose');
const bcrypt =require('bcrypt');
const User =require('../models/user');
const app=express()
const jwt=require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/quiz', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(response=>{
    console.log("connected");
})
.catch(err=>{
    console.log("not connected");
    
})
const cors = require('cors');
app.use(cors());
/*app.use((req, res, next)=>{
    res,setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );y
    
    next();
});*/

const { UserRegister,userLogin} = require('../utils/auth');



router.get('/',(req, res)=>{
    res.send('api route');
})
//user register module
router.post('/register-user', async(req, res)=>{
    await UserRegister(req.body, 'user', res);
});


//lead register module
router.post('/register-lead', async(req,res)=>{
    await UserRegister(req.body,'lead', res);
});


//admin register module

router.post('/register-admin',async(req,res)=>{
    await UserRegister(req.body,'admin', res);
});




    /*
    let user=new User({
        username:req.body.username,
        email:req.body.email,
        password:User.hashPassword(req.body.password)
    });
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            let payload={ subject:registeredUser._id}
            let token=jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }

    })
})*/


//login user
router.post('/login-user',async (req, res)=>{
    await userLogin(req.body ,res);
});

//admin  login
router.post('/login-lead',async (req, res)=>{
await userLogin(req.body,res);
});

//lead login
router.post('/login-admin',async (req, res)=>{
await userLogin(req.body,res);
});

    /*let userData= req.body
       /* User.findOne({username:userData.username},(error,user)=>{
            if(error)
            {
                console.log(error)
            }
            else(!user){
                res.status(401).send('Invalid Username')
            }
        })
        User.findOne({email: userData.email}, (error, user)=>{
        if(error)
        {
            console.log(error)
        }
        else{
         if(!user){
                res.status(401).send('Invalid email');

            }
            else
            if(user.password!==userData.password){
                res.status(401).send('Invalid Password')
            }else{
                let payload={subject:user. _id}
                let token=jwt.sign(payload,'secretKey')
                 res.status(200).send(token)
            }
    
        
        }
    })


})*/




module.exports=router