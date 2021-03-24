const customExpress = require('./customExpress/customExpress')
const app = customExpress()
const mongoose = require('mongoose')
const PORT = 3000

mongoose.connect('mongodb://localhost:27017/workshop',
{ useNewUrlParser: true,useUnifiedTopology: true},error=>{
    if(!error){
        app.listen(PORT,()=>{
        console.log(`Servidor rodando na porta ${PORT} e conectado ao Db`)
})
    }else{
        console.log(error)
    }
})

