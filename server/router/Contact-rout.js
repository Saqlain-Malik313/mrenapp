const express = require ('express')
const router =express.Router()
const{contact} = require('../Controllers/Authcontrol')


router.post('/contact',(contact))



module.exports=router