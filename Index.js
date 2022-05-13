const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Foro";
const Pregunta = require('./Models/Pregunta');
 
//const MONGO_URI = require(process.env.MONGO_URI); 
const PORT = process.env.PORT || 5008;



// falta hacer test con postman 
const DatabaseC = async (req,res)=>{

  try{
   
    const Database = client.db(url);
    
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.info("conectado");
   }catch(err){
     res.status(500).json({message:err});
     console.info('error');
    }}
     
   
app.post("/api/pregunta"),async(req,res)=>{
  res.send(' guardar pregunta');
  let pregunta = new PreguntaSchema();
  pregunta.Nombre = req.body.Nombre;
  pregunta.Contenido = req.body.Contenido;

pregunta.save((data,err)=>{
  if(err){
    console.info(err);
  }
  else{
    console.info(`data saved${data}`);
  }
  DatabaseC();
})
    
}

app.get('/api/Pregunta'),async(req,res)=>{
  res.send(" buscar pregunta");

  DatabaseC = async ()=>{await Database.find((Pregunta,err)=>{
    if(!err){
      res.get(200).json(Pregunta);
      console.info("Data found");
    }
    else if(err){
      res.status(500);
      console.info("Data not found");
    }
    DatabaseC();
  })}

}


app.get("api/Nombre"),async(req,res)=>{
  res.send(" buscar nombre");
/*Getinfo=async(nombre,err)=>{
  await Database.find(nombre)

}*/

  DatabaseC = async ()=>{
    
    await Database.find(nombre).then(()=>{
    console.info(`${nombre}`);
    res.status*(200);
  }).catch(err=>{
    res.status(500);
    console.info(err);

  })}
  DatabaseC();
 
}

app.get('/',(req,res)=>{
    res.send("Main Page");
    DatabaseC();
})

app.get('/foro',(req,res)=>{
    res.send('l');
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


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
