const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/foro";
const Pregunta = require('./Models/Pregunta');
const bodyParser = require("body-parser");
const router = express.Router();

 
//const MONGO_URI = require(process.env.MONGO_URI); 
const PORT = process.env.PORT || 5008;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// falta hacer test con postman 
const DatabaseC = async (req,res)=>{

  try{
    
    
    
    const client = await mongoose.connect(url);
    const db = client;
   
    console.info("conectado");
   }catch(err){ 
     
     console.info('error');
     console.error(err);
    }}

   
// funciona con postman   
app.post("/api/preguntap",async(req,res)=>{
  
  let pregunta = new Pregunta();
  pregunta.Nombre = "Jose";
  pregunta.Contenido = "Hola";
/*
req.params.Nombre;
req.params.Contenido;
*/


  res.send('guardar pregunta');


pregunta.save((data,err)=>{
  if(err){
    console.info(err);
    console.log('error');
  }
  else{
    console.log("data saved");
    console.info(`data saved`);
  }
  DatabaseC();
})
console.log(`Pregunta:${pregunta}`);  
});




app.get('/api/pregunta',async(req,res)=>{
  

  DatabaseC(async ()=>{await Database.find((Pregunta,err)=>{
    if(!err){
    res.get(200).json(Pregunta);
      console.info("Data found");
      console.log(`Nombre:${Pregunta.Nombre} ,contenido:${Pregunta.Contenido}`);
    }
    else if(err){
      res.status(500);
      console.info("Data not found");
      console.log("no se encontro");
    }
    DatabaseC();
    res.send(" buscar pregunta");
    console.log(`Pregunta:${pregunta}`);  
  })}

)})


app.get("/api/nombre" ,async(req,res)=>{
  DatabaseC(async()=>{await Database.find((Pregunta,err)=>{
    if(err){
      console.log("error");
    }
    else if(!err){
      console.log("data found");
      res.send(Pregunta);
    }
  })})

});



app.get('/api/hola',async(req,res)=>{
  res.send("ko");
  DatabaseC();
});






app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
