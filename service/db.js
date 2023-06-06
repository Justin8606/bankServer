//  import mongoose

const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/bankServer')

// (now the server and database is integrated.)

// model for collection     //schema-fields and values in model
// (model here is like a class in js)
const User=mongoose.model('User',{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transaction:[]

})

// export model
module.exports={
    User
}