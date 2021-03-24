const UserModel = require('../model/config')


class userController{
    async create(req,res){
        let {name,email,password} = req.body

        //validação dos campos
        if(name == undefined || name == '' || name.length <3){
           res.status(400).json({err:'Usuário invalido, permitido usuários > 3 caracteres'})
           return false
        }
        if(email == undefined || email== '' || email.length <3){
            res.status(400).json({err:'Email invalido, permitido email > 3 caracteres'})
            return false
        }
        if(password == undefined || password== '' || password.length <3){
            res.status(400).json({err:'Senha invalida'})
            return false
        }

        //Criando Usuario Db
        try{
            let status = await UserModel.create(name,email,password)
            if(status){
                res.status(200).send('Usuário Cadastrado')
            }else{
                res.status(500).json({err:'Erro ao gravar no Db '})
            }
        }catch(error){
            console.log(error)
        }
        
    }

    async findAll(req,res){
        try{
            let data = await UserModel.find()
                if(data){
                    res.status(200).json(data)
                }else{
                    res.status(404).json({err:'Nenhum cadastro encontrado!'})
                }
        }catch(error){
            res.status(500).json({err:'Erro Servidor'})
        }
        
    }

    async findById(req,res){
        let id = req.params.id
                try{
                    let data = await UserModel.findById(id)
                    if(!data.length <= 0){
                        res.status(200).json(data)
                    }else{
                        res.status(404).json({err:'Não Encontrado'})
                    }
                }catch(error){
                    console.log(error)
            }
    }

    async updateUser(req,res){

       let id = req.params.id
       let {name,email,password} = req.body
       
       try{
           let data = await UserModel.update(id,name,email,password)
           console.log(data)
           if(data){
                 res.status(200).json({status:'Usuário Atualizado com sucesso!'})
            }else{
                res.status(404).json({err:'Usuário não encontrado'})
            }
           
       }catch(error){
            res.status(500).json({err:'Formato de id inválido!'})
       }
        
    }

    async deleteUser(req,res){
        let id = req.params.id
        try{
            let data =  await UserModel.delete(id)
                if(!data == []){
                   res.status(200).send('Usuário deletado com sucesso')
                   console.log(data)
                }else{
                    res.status(404).send('Usuário não encontrado')
                }
        }catch(error){
            if(error.messageFormat == undefined){
                res.status(500).send('Id com formato Inválido')
            }
        }
        
    }

    //---

}

module.exports = new userController