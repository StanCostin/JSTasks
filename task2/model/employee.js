const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {

    _id: {
        type: Number,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    Adress: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Hire_date: {
        type: Date
    },
    Salary: {
        type: Number,
        require: true
    },
    Job_Title: {
        type: String,
        require: true
    }

}
);

module.exports = { Employee }