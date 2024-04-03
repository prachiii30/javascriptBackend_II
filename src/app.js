import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


//configur cors usind app.use
//we can also do some setting inside cors
//corsOption{ }    is an object 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))  //form bhara wala data liya
app.use(express.urlencoded({extended:true,limit:"16kb"}))



const app=express()

export {app}