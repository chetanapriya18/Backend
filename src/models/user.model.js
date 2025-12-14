import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        username :{
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true, //whitespaces get printed
            minLength : 1,
            maxLength:30
        },

        password:{
            type : String,
            required : true,
            minLength: 6,
            maxLength : 20
        },

        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true, 
            
        }
    },
    {
        timestamps : true
    }
)

export const User = mongoose.model("User",userSchema)