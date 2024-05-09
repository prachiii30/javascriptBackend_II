import express  from "express";
import cors from "cors";
// cookie-parser is used for - mere server s user k browser k cookies access kr pau aur uski cookies set kr pau (crud operation on cookies)
import cookieParser from "cookie-parser";

//req.body me alg lag form m data aa skta h json me ya form 
//req.params  moslty url se jb bhi koi data ata h th woh issi form m aata h

//configur cors using app.use
//we can also do some setting inside cors
//corsOption{ }    is an object 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//we use multer for file uploading configure
app.use(express.json({limit:"20kb"}))  //form bhara wala data liya
app.use(express.urlencoded({extended:true,limit:"16kb"})) //extended :obj k andr obj de skte
app.use(express.static("public")) 
app.use(cookieParser())



const app=express()

export default {app}