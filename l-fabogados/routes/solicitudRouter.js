const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const Solicitud=require('../models/solicitud')

const solicitudRouter=express.Router()

solicitudRouter.use(bodyParser.json())
solicitudRouter.route('/')
.get((req,res,next)=>{
    Solicitud.find({})
    .then((solicitudes)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(solicitudes);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    Solicitud.create(req.body)
    .then((solicitud)=>{
        console.log('solicitud creada', solicitud);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(solicitud);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /solicitudes');
})
.delete((req,res,next)=>{
    Solicitud.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err))
})

module.exports=solicitudRouter;