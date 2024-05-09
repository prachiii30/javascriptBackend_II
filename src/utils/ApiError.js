//inheriting the Error class

//error toh node me trace hore hai but yh jo req and response ka kaam kr re wh 
//core node nhi express use kr re hai
class ApiError extends Error{
    constructor(statusCode,message="Something went wrong",errors=[],stack=""){ //stack mean error stack
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors= errors

        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}