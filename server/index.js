const express = require('express')
const {connectionToDB}=require('./Dbconnection')

const app=express();
connectionToDB()
const PORT=3005

app.listen(PORT,()=>{
    console.log(`server is listning ${PORT}`)
})
