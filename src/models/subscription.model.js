import mongoose,{Schema} from "mongoose";

const subscriptionSChema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
    channel:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})