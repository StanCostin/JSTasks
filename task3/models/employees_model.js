const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', {

    _id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Adress: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Hire_date: {
        type: Date
    },
    Salary: {
        type: Number,
        required: true
    },
    Job_Title: {
        type: String,
        required: true
    },

    project_id: { type: mongoose.Schema.Types.Number, ref: 'Product'}

}
);

module.exports = { Employee }