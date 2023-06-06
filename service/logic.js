// import model
const db=require('./db')

// register logic
register=(acno,uname,psw)=>{
    return db.User.findOne({acno}).then(user=>{
        if(user){
            return{
                message:"user already present",
                status:false,
                statuscode:404 //client error
            }
        }
        else{
            newuser=new db.User({   //create class using file name in new object.
                acno:acno,
                uname:uname,
                psw:psw,
                balance:0,
                transaction:[]
            })
// to reflect the changes done by server in database
                newuser.save()
                return{
                    message:"registered successfully",
                    status:true,
                    statuscode:200 //success
                }
        }
    })
}

// login logic

login=(acno,psw)=>{
    return db.User.findOne({acno,psw}).then(user=>{
        if(user){
            return{
                message:"login success",
                    status:true,
                    statuscode:200
            }
        }
        else{
            return{
                message:"incorrect acno or password",
                status:false,
                statuscode:404
            }
        }
    })
}


module.exports={
    register,login
}