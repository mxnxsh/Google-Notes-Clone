import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    note:{
        type:String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const noteModel = mongoose.model("Note", noteSchema)

export default noteModel;