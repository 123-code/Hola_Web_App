const express = require('express');
const app = express();

const port=5005;


app.get('/',(req,res)=>{
    res.send("Main Page");
})

app.get('/foro',(req,res)=>{
    res.send("Foro");
});

app.get('/material',(req,res)=>{
    res.send("material");
});

app.get('/nosotros',(req,res)=>{
    res.send("nosotros");
});

app.get('/contacto',(req,res)=>{
    res.send("contacto");
});




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});