const express = require ('express')
const router =express.Router()
const{home,register, login, profile}= require('../Controllers/Authcontrol')
const validate = require('../Middleware/Valid-Middleware')



router.get('/',(home))

router.post('/register',(register))

router.post('/login',(login))

router.get('/profile',(profile))



module.exports=router