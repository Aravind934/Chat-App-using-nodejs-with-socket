socket = io.connect("http://localhost:4000/");

output = document.querySelector("#output");
feedback =  document.querySelector("#feedback");
handle =  document.querySelector("#handle");
message =  document.querySelector("#message");
btn =  document.querySelector("#send");

btn.addEventListener("click",()=>{
       socket.emit("chat",{handle:handle.value,message:message.value});
})

message.addEventListener('mouseover',()=>{
    socket.emit("typing",handle.value);
})



socket.on("chat",(data)=>{
    output.innerHTML+= '<p><b>'+data.handle+ ': </b>'+ data.message + "</p";
})

socket.on("typing",(data)=>{
    feedback.innerHTML = '<p><em>'+ data +" is typing...</em></p";
})