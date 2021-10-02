const { Router } = require('express');
const express = require('express');
const route = express.Router();
const { Employee } = require('../models/employees_model');
const { Project } = require('../models/projects_model');

route.get('/employees', (req, res) => {
    Employee.find({}, (err, intel) => {
        try {
            res.send(intel);
        }catch(err){
            console.log(err);
        }
    }).select('-__v');
});

route.post('/employees/add', (req, res) => {
    emp = new Employee({
        _id: req.body._id,
        Name: req.body.Name,
        Adress: req.body.Adress,
        Email: req.body.Email,
        Hire_date: req.body.Hire_date,
        Salary: req.body.Salary,
        Job_Title: req.body.Job_Title
    });

    emp.save((err, data) => {
        try {
            res.status(200).json({code: 200, message: 'Employee Added Successfully', addEmployee: data})
        } catch(err) {
           console.log(err);
        }
    });

});

route.get('/employees/:Name', (req, res) => {
    Employee.findOne({'Name':req.params.Name}).then((intel) => {
        res.json(intel);
    });
});

route.put('/employees/update/:_id', (req, res) => {

    const emp = {
        _id: req.body._id,
        Name: req.body.Name,
        Adress: req.body.Adress,
        Email: req.body.Email,
        Hire_date: req.body.Hire_date,
        Salary: req.body.Salary,
        Job_Title: req.body.Job_Title
    };
    Employee.findByIdAndUpdate(req.params._id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee Updated Successfully', updateEmployee: data})
        } else {
            console.log(err);
        }
    });
});

route.delete('/employees/delete/:_id', (req, res) => {
    Employee.findByIdAndDelete(req.params._id, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee deleted', deleteEmployee: data});
        } else {
            console.log(err);
        }
    });
});

//select all the projects to all employees

route.get('/join', (req, res) => {
    Employee.aggregate(
        [
            {
                $lookup: {
                    from: 'projects',
                    localField: 'projects',
                    foreignField: 'project_id',
                    as: 'project_id',
                    
                }
            }

        ]
    ).exec((err, intel) => {
        console.log(intel);
        res.json(intel);
    });
})

//select one project for each employee

route.get('/join/oneproject', (req, res) => {
    Employee.aggregate(
        [

            {
                $lookup: {
                    from: 'projects',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'project_id'
                }
            }

        ]
    ).exec((err, intel) => {
        console.log(intel);
        res.json(intel);
    });
})

module.exports = route;