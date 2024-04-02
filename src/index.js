
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>
app.listen(process.env.PORT || 8000),()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
})
.catch((err)=>{
    console.log("MONGOBB Connection fail ERROR:",error)
})






















// function connectDB(){)

// connectDB()  




//better way mention below using IIFE

/*   first way but polluted index.js  

import { express } from "express";

const app=express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error",(error)=>{    LISTNER
            console.log("err:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App id listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR :",error)
        throw err
    }
})()   //whereever we deal with connection of database always put try catch block

*/