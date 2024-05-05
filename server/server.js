import express from 'express';
import dotenv from 'dotenv'
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import cors from 'cors';

//if, instead of using "const express = require("express");" we want to use "import express from 'express';" we have to change the "package.json" by adding "'type': module"
//const express = require("express");
//const dotenv = require("dotenv");// npm i dotenv

dotenv.config();
const app = express();
//middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//primary route
app.get("/", (req,res)=>{
    res.send("Hello Hogwarts!");
});

//router
app.use('/', router); // the request is like '/register', '/upload'

//DBConnection
DBConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})