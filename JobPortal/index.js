//impost express
import express from "express";
import dotenv from "dotenv"
import connectDB from "./database/db.js";

//dot env condif
dotenv.config()

//Mongodb connection
connectDB();
//rest
const app=express();

const PORT=process.env.PORT || 8080

//route home page
app.get(`/`,(req,res)=>{
    res.send(`this is a home page.`)
})

app.listen(PORT,()=>{
 console.log(`Server is running  port:${PORT}`)
});