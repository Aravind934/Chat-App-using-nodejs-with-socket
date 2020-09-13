const express = require('express');
const ejs =require('ejs');
var app = express();
const socket = require('socket.io');
//connection
 var server = app.listen(4000,()=>{
    console.log('4000');
});
 //congiguration
 app.set('view engine','ejs');
 app.use(express.static('public'));
 
 app.get('/',(req,res)=>{
     res.render('home');
 })

 //socket
 
var io = socket(server);

 io.on("connection",(socket)=>{
     socket.on("chat",(data)=>{
         io.sockets.emit("chat",data);
     })

     socket.on("typing",(data)=>{
         socket.broadcast.emit("typing",data);
     })
 });



