const mongoose=require('mongoose')
const Schema=mongoose.Schema
const personaSchema=new Schema({
    name:{
        type:String,
        required:true
    },    
    age:{
        type:Number,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    }
})
const solicitudSchema=new Schema({
    persona:{personaSchema}
    ,description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

var solicitudes=mongoose.model('Solicitud',solicitudSchema)
module.exports=solicitudes
