const mongoose = require('mongoose');
var bcrypt =require('bcrypt');
const Schema= mongoose.Schema
const userSchema= new Schema({
    username: {type: String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    role:{
        type:String, 
        default:'user',
        enum:['user','lead','admin']
    }
     

},
{timestamps:true}

);


//To encrypt password using bycrypt module...
userSchema.statics.hashPassword=function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
module.exports=mongoose.model('user',userSchema,'users')



