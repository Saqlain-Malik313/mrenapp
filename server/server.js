require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors());
app.use(express.json())
app.use('',require('./router/Auth-rout'))
app.use('',require('./router/Contact-rout'))
const connectdb= require('./Altas/Db')
const errormiddleware = require('./Middleware/error-middle')



//app.use(express.json())


app.use(errormiddleware);




const Port =2000;
//app.listen(Port,()=>{console.log(`server is on ${Port}`)})

connectdb().then(()=>{
app.listen(Port,()=>{console.log(`server is on ${Port}`)})
})