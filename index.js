const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/',(req,res)=>{
    res.send("Welcome TO Home Page Entry Point!")

})
app.get('/api/users',(req,res)=>{
    res.send("Welcome to Users Get!")

})
app.post('/api/users',(req,res)=>{
    const body=req.body;
    console.log(`post hits and Body`+ body)
    res.json({
        status:true,
        message:`welcome to Users ${body.name}`,
        data:body
    })
    
})





app.listen(2000,()=>{
    console.log("Server Is Running on Localhost:2000");
})