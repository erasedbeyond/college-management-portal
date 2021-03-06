const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true
    },
    deadline:{
        type:Date,
        required:true
    },
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }]

    
},{
    timestamps:true
})

const Assignment = mongoose.model('Assignment',assignmentSchema);

module.exports = Assignment;