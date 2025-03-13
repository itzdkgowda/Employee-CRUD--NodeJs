// const express = require('express');
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');
// const Employee=require('./employee');
import express from 'express'
import mongoose from 'mongoose'
import bodyparser  from 'body-parser'
import Employee from './employee.js'

//To connect to the database
mongoose.connect("mongodb+srv://itzdkgowda:57igfZqQvWXISCeE@cluster0.201ud.mongodb.net/testdatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB", error));   

const app = express();
app.listen(3000, () => console.log("Server is running on port 3000"))
app.use(bodyparser.json());


// To create a new employee
app.post("/api/create_employee",async(req,res)=>{
    const {name } =req.body;
    console.log(req.body);
    const employee=new Employee({name})
    await employee.save();
    res.status(200).send("ok");
    const result = await Employee.findOne({name});
        console.log(result);
});

// To get the list of all employees
app.get("/api/employees",async(req,res)=>{
    const result = await Employee.find();
    res.send(result);
});

// To Update the list
app.put("/api/employees_update", async (req, res) => {
    const { _id,name } = req.body;
    console.log(req.body);
    const result = await Employee.findByIdAndUpdate({_id},{name});
    console.log(result);
    res.send(result);
});

// To delete the list
app.delete("/api/employees_delete", async (req, res) => {
    const {name } = req.body;
    console.log(req.body);
    const result = await Employee.deleteOne({ name });
    console.log(result);
    res.send(result);
});
