const bodyParser = require('body-parser')
const express = require('express')
const router = require('../routes/router')


module.exports= ()=>{
    const app = express()

    app.use(bodyParser.json({}))
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/',router)

    return app
}