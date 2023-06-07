const express = require('express');
const app = express();

app.get('/',(req,res) =>{
 res.send("<h1>hello world!</h1>");
})

app.get('/contact',(req,res)=>{
  res.send("contact me at : abc@gmail.com");
})
 
app.get('/about',(req,res) =>{
  res.send("my name is shivendra pratap singh ");
});

app.get('/hobbies',(req,res) =>{
  res.send('my hobbies are reading books doing yoga and eating ');
});

app.listen(3000,()=>{
  console.log('Server listening on port 3000');
});