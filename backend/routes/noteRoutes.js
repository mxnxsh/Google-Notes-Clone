import express from "express";
const router = express.Router()

import Note from '../models/noteModel'
import {isAuth} from '../config/util'


router.get('/', isAuth,async(req,res)=>{
    const data = await Note.find({user:req.user._id}).populate('user');
    res.send(data);
})

router.post("/",isAuth,async(req,res)=>{
    const {title,note} = req.body;
    console.log("req.user=>",req.user);
    const notes = new Note({
        title,
        note,
        user:req.user._id
    });
    const newNote = await notes.save();
    if(newNote){
        return res.status(201).send({message:"Note added successfully",note:newNote});
    }
    return res.status(422).send({Error:"Error in notes"});
})

router.delete("/:_id", isAuth, async (req, res) => {
    const _id = req.params._id;
    const deleteNote = await Note.findById(_id);
    if(deleteNote) {
        await deleteNote.remove();
        res.send({message:'Delete successfully'})
    } else {
        res.send("error")
    }
})

export default router