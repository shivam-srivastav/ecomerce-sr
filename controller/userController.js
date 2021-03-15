const { User } = require('../model');
const jwt = require('jsonwebtoken')
register = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            error:"empty request"
        })
    }
    const user = {
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
        role: req.body.role,
        profile_pic:req.body.profile_pic
    }
    const post_user = new User({ ...user });
    post_user.save()
        .then((user) => {
            jwt.sign({ user:user }, 'shivam', (err, token) => {
                if (err) {
                    return res.status(401).json({
                        message: "Registration failed",
                        err:err
                    })
                }
                return res.status(200).json({
                    message: 'success',
                    token:token
                })
            })
    }).catch((err) => {
                return res.status(400).json({
                    message: "failed",
                    err:err
            })
    })
    console.log(post_user)
}
login = (req, res) => {
    if (!req.body) {
        return res.status(402).json({
            message: "Error:404",
            err:"Invalid request"
        })
    }
    
    User.findOne({ email:req.body.email }, (err, user) => {
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                status:"404"
            })
        }
        if (user.password !== req.body.password) {
            return res.status(402).json({
                message: "Invalid Password",
                status: "402"
            })
        }

        jwt.sign({ user:user }, "shivam", (err, token) => {
            if (err) {
                return res.status(403).json({ message: "error token", token: "failed" })
            }
            else
                res.cookie('token', token,);
            console.log(res)
            return res.status(200).json({
                message: "success",
                token
            })
        })
        // return res.status(200).json({
        //     message: "success",
        //     data:user
        // })
    })
}
getuser = (req, res) => {
    if (!req.header('token')) {
        return res.status(404).json({
            message: "Request not found",
        })
    }
    jwt.verify(req.header('token').split(" ")[1], 'shivam', (err, data) => {
        if (err) {
            return res.status(401).json({
                message:"Invalid Token"
            })
        }
        return res.status(200).json({
            message: "success",
            data:data
        })
    })
}
module.exports = {
    register,login,getuser
}