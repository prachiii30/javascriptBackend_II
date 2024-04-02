
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})


connectDB()






















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