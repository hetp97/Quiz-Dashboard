const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserRegister = async (userDets, role, res) => {
    try {

        const password = await bcrypt.hash(userDets.password, 12);

        const newUser = new User({
            ...userDets,
            password,
            role

        });

        await newUser.save();
        return res.status(201).json({
            message: 'Registered sucessfully',
            success: 'true'

        });
    } catch (err) {
        return res.status(500).json({
            message: 'Unable to register',
            success: 'false'

        });

    }

};

//login work
const userLogin = async (userCreds, res) => {
    console.log("Within userLogin backend function");
    console.log(userCreds);
    let { email, password } = userCreds;
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
        return res.status(404).json({
            message: "Invalid email",
            success: "false"
        })
    }
    //// if(user.role!=role) {
    //  return res.status(403).json({
    // message:"You are not authorized to access this page",
    // success:"false"
    // });
    // }
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        console.log("within if block");
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username: user.username,
            email: user.email
        }, 'secretKey');
        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token
        };
        console.log(result);
        res.status(200).json({
            ...result,
            msessage: "You are login successfully! cheers",
            success: true
        });

    } else {
        console.log("within else block");
        return res.status(403).json({
            message: "Invalid login credentials",
            success: "false"
        });
    }

    const validateUsername = async username => {
        let user = await User.findOne({ username });
        return user ? false : true;


    };

    const validateEmail = async email => {
        let user = await User.findOne({ email });
        return user ? false : true;
    };


}

module.exports = { UserRegister, userLogin};

