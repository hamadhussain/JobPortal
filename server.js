// const express =require('express')
import express   from "express";
import dotenv from 'dotenv'
import Connectdb from "./config/db.js";
import testRoues from './routes/testRoutes.js'
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import errroMiddelware from "./middelwares/erroMiddleware.js";

dotenv.config()

Connectdb()


const app=express()

app.use(cors())
app.use(morgan("dev"))

app.use(express.json())
app.use("/api/test",testRoues)
app.use("/api/auth",authRoutes)

app.use(errroMiddelware)

const Port=process.env.Port||8080
app.listen(Port,()=>{
    console.log(`${process.env.MoD} run ${Port}`);
}); 