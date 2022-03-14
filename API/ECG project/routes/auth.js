const express = require('express')
const verifiedUser = require('../models/verifiedUsers')
const router = new express.Router

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {registerValidation, loginValidation} = require('./validation')


//View userprofile
router.get('/',async(req,res) =>{
    try{
        const users = await verifiedUser.find()
        res.json(users)
    }
    catch{
        res.send('Error' + err)
    }
})



//Register a user
router.post('/register', async(req, res,next) => {

    try{
    //validate the data before register a user
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //checking whether the the doctor id is already available in the db
    const doctoridExist = await verifiedUser.findOne({doctorid:req.body.doctorid})
    if (doctoridExist) return res.status(400).send('Doctorid already exists.')

    //checking whether the the username is already available in the db
    const usernameExist = await verifiedUser.findOne({username:req.body.username})
    if (usernameExist) return res.status(400).send('Username already exists.')

    //hashing the password
    bcrypt.genSalt(10, async(err,salt) => {
        bcrypt.hash(req.body.password,salt, async(err,hash) =>{
            const user = new verifiedUser({
                doctorid : req.body.doctorid,
                name : req.body.name,
                username : req.body.username,
                password : hash
            })
            try{
                const savedUser = await user.save()
                res.send({user: user._id});
            }
            catch(err){
                res.status(400).send(err)
            }
        
        })
    })
    }
    catch(err){
        res.status(500).json(err)
    }

})


//Login users

router.post('/login', async(req, res,next) => {
    try{
        //validate data before login
        const { error } = loginValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        //check whether the username is correct
        const user = await verifiedUser.findOne({username:req.body.username})
        if (!user) return res.status(400).send('username or password is wrong.')

        //Check whether the password is correct
        const validpassword = await bcrypt.compare(req.body.password,user.password)
        if (!validpassword) return res.status(400).send('Invalid password.')

        //create and assign token
        //const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET)

        const {password ,...others } = user._doc
        res.status(200).json(others)
        //res.send('Logged in');
        console.log("done")

    }
    catch(err){
        res.status(500).json(err)
    }

})


module.exports = router