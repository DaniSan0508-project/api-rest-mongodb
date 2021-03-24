const mongoose = require('mongoose')
const UserSchema = require('../model/userSchema')
const userModel = require('../model/userSchema')
const  userNewModel = mongoose.model('user',userModel)

class User{
    async create(name,email,password){

      let newUser = new userNewModel({
          name,
          email,
          password
      })

      try{
        let data = await newUser.save()
            if(data){
                return true
            }
         }catch(error){
            return false
        }
    }

    async find(){
        try{
            let data = await userNewModel.find({})
                if(data == []){
                    return false
                }else{
                    return data
                }
        }catch(error){
            console.log(error)
        }
    }

    async findById(id){
        try{
            let data = await userNewModel.find({'_id':id})
            return data
                }catch(error){
                    return error
            }
    }

    async update(id,name,email,password){
        
        try{
            let data = userNewModel.findByIdAndUpdate(id,{
                name,
                email,
                password:parseInt(password)
            })
                return data
        }catch(error){
            return error
        }
    }

    async delete(id){
        try{
            let data = await userNewModel.findByIdAndDelete(id)
            return data
        }catch(error){
            return error
        }
        
    }
}

module.exports = new User