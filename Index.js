const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Foro";
//const MONGO_URI = require(process.env.MONGO_URI);
const PORT = process.env.PORT || 5008;

const Qschema = new mongoose.Schema({
  Nombre: String,
  Pregunta: String,
});


const DatabaseC = async ()=>{

  try{
    const Database = client.db(url);
    client.close();
    return mongoose.connect(config.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true });

   }catch(err){
     res.status(500).json({message:err});
    }}
     
   
app.post("api/pregunta"),async(req,res)=>{
DatabaseC(async()=>{

  await Database.save(req.body).then(()=>{ 
    res.status(200);
  }).catch(err=>{
    res.status(500).json({message:err});
    console.info(err);
  })

})
    
}

app.get('api/Pregunta'),async(req,res)=>{
  DatabaseC = async ()=>{await Database.find((Pregunta,err)=>{
    if(!err){
      res.get(200).json(Pregunta);
    }
    else if(err){
      res.status(500);
    }
  })}

}

app.post("api/nombre"),async(req,res)=>{
  DatabaseC = async ()=>{ await Database.save(req.body).then(()=>{
    res.status(200);

  }).catch(err=>{
    res.status(500);
    console.info(err);
  })}
 

}

app.get("api/nombre"),async(req,res)=>{
  DatabaseC = async ()=>{
    
    await Database.find(nombre).then(()=>{
    res.status*(200);
  }).catch(err=>{
    res.status(500);
    console.info(err);

  })}
 
}

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


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
