const mongoose = require("mongoose");

const ProcessSchema = new mongoose.Schema({
    process: {
        type: String,
        required: true,
    
    },
    quarter: {
        type: String,
        required: true,
    
    },
    responsible: {
        type: String,
        required: true,
    
    },
    administrator:{
        type: String,
        required: true,
    },
    percentage:{
        type: String,
        required: true,
    },
    observations:{
        type: String,
        required: true,
    },
    history:{
        type: [],
       
    },
    
},{timestamps:true});

module.exports.Process = mongoose.model("Process",ProcessSchema)