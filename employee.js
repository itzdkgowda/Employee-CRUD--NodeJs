// const mongoose = require("mongoose");
import mongoose from 'mongoose'

// const Schema = mongoose.Schema;
import { Schema } from 'mongoose'

const employeeSchema = new Schema({
    name: String
});
const Employee = mongoose.model("employees", employeeSchema);

export default Employee