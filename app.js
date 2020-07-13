const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./Keys')




mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/path'))
app.use(require('./routes/post'))




app.listen(PORT, ()=> {
    console.log("app is running on",PORT)
})