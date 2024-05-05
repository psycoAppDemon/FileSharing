import { response } from "express";
import file from "../models/file.js";
import dotenv from 'dotenv';
dotenv.config();

export const uploadImage = async (req,res) =>{
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    try{
        const imageFile = await file.create(fileObj);
        res.status(200)
        .json({
            path:`http://localhost:${process.env.PORT}/file/${imageFile._id}`
        })
    }catch(error){
        console.log(error.message);
    }
};

export const getImage = async (req,res) =>{
    
    try{
        const imageFile = await file.findById(req.params.fileId);
        imageFile.downloadCount++;
        await imageFile.save();
        res.download(imageFile.path, imageFile.name);
    }catch(error){
        console.log(error.message);
    }
};