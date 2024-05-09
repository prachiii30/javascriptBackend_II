const asyncHandler=(requestHandler)=>{(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err)) //fail 
    }
}

export {asyncHandler}


//to standardise the api response and the error structure we write in another file
//to make the work easy and convinient



//try - ccatch method 
/*
const asyncHandler=(func)=> async(req,res,next)=>{
    try {
        await func(res,req,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}
*/