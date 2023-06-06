// import express
const express=require('express')

const logic=require('./service/logic')

// import cors
const cors=require('cors')

// server creation
const server=express()

// incoming json type data convert to js
server.use(express.json())

//connect front-end
server.use(cors({origin:'http://localhost:4200'}))


// set port
server.listen(3000,()=>{
    console.log("_____server started at port 3000_____");
})

// (next is how to run this server.)

// server api resolve
// server.post('/getexc',(req,res)=>
// {res.send("....post request.....")})

server.post('/register',(req,res)=>{
    logic.register(req.body.acno,req.body.uname,req.body.psw).then(result=>{
        // convert js to json and send as response
        res.status(result.statuscode).json(result)
    })
})

// login post
server.post('/login',(req,res)=>{
    logic.login(req.body.acno,req.body.psw).then(result=>{
        res.status(result.statuscode).json(result)
    })
})

// register - post
// login -post
// get user data- get
// balance -get
// tranfer -post
// transaction history-get
// ac delete -delete

// https://localhost:3000/register
//  {
//   "acno":1000,
//   "psw":"abc123",
//   "uname":"anu"
// }