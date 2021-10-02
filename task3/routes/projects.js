const { Router } = require('express');
const express = require('express');
const route = express.Router();
const { Project } = require('../models/projects_model');

route.get('/projects', (req, res) => {
    Project.find({}, (err, intel) => {
        try {
            res.send(intel);
        }catch(err){
            console.log(err);
        }
    });
});

route.post('/projects/add', (req, res) => {
    prj = new Project({
        _id: req.body._id,
        Project_name: req.body.Project_name,
        Start_date: req.body.Start_date,
        Planned_end_date: req.body.Planned_end_date,
        Description: req.body.Description,
        Project_code: req.body.Project_code
    });

    prj.save((err, data) => {
        try {
            res.status(200).json({code: 200, message: 'Project Added Successfully', addProject: data})
        } catch(err) {
           console.log(err);
        }
    });

});

route.put('/projects/update/:_id', (req, res) => {

    const prj = {
        _id: req.body._id,
        Project_name: req.body.Project_name,
        Start_date: req.body.Start_date,
        Planned_end_date: req.body.Planned_end_date,
        Description: req.body.Description,
        Project_code: req.body.Project_code
    };
    Project.findByIdAndUpdate(req.params._id, { $set: prj }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Project Updated Successfully', updateProject: data})
        } else {
            console.log(err);
        }
    });
});

route.delete('/projects/delete/:_id', (req, res) => {
    Project.findByIdAndDelete(req.params._id, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Project deleted', deleteProject: data});
        } else {
            console.log(err);
        }
    });
});

module.exports = route;