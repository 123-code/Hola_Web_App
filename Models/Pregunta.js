const mongoose = require("mongoose");

const PreguntaSchema = mongoose.Schema(
    {
    // aqui se puede Cambiar a Many dt
    Nombre:{required:true,type:String},
    Contenido:{required:true,type:String,index:{unique:true}},
    
},
{
timestamps:true, 
}
);

console.info("Worked");
module.exports = mongoose.model("Pregunta",PreguntaSchema);
