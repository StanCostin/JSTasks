const mongoose = require('mongoose');

const Project = mongoose.model('Project', {

    _id: {
        type: Number,
        required: true
    },
    Project_name: {
        type: String,
        required: true        
    },
    Start_date: {
        type: Date,
        required: true
    },
    Planned_end_date: {
        type: Date,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Project_code: {
        type: String,
        required: true        
    }
}
);

module.exports = { Project }