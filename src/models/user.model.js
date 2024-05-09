import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt";


const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            index:true,
            lowercase:true,
            trim:true
        },
        email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
        },
        fullname:{
            type:String,
            required:true,
            index:true,
            trim:true
        },
        avtar:{
            type:String ,//cloudinary url like aws
            required:true,
        },
        coverImage:{
            type:String,
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'password is required']
        },
        refreshToken:{
            type:String
        }
    },
    {
        timestamps:true
    }
)


userSchema.pre("save",async function(next){
    this.password=bcrypt.hash(this.password,10)
    next()
})
export const user=mongoose.model("User",userSchema)