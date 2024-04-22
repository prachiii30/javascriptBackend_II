import mongooge,{Schema} from "mongoose";

const videoSchema=new Schema(
    {
        videoFile:{
            type:String,  //couldinary url
            required:true
        },
        thumbnail:{
            type:String,  //couldinary url
            required:true
        },
        title:{
            type:String,
            required:true
        },
       description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,  //cloudinary url
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {timestamps:true})

export const video=mongooge.model("Video",videoSchema)