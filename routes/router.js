const express = require('express')
const mongoose = require('mongoose')
const userController = require('../controllers/UsersControllers')
const router = express.Router()


router.get('/user',userController.findAll)
router.get('/user/:id',userController.findById)
router.post('/user',userController.create)
router.put('/user/:id',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)




module.exports = router