import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewEmployee() {

    const { _id } = useParams();
    const [employee, setEmployee] = useState({
        Name: '',
        Adress: '',
        Email: '',
        Hire_date: new Date(),
        Salary: 0,
        Job_Title: ''
    });

    useEffect(() => {
        loadEmployee();
    }, []);
    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:3001/employees/FindById/${_id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        setEmployee(result.data);
        console.log(result.data);
    };

    let hd = employee.Hire_date.toString().substring(0,10);
    console.log(hd)

    return (
        <div className="container py-4">
            <Link className="btn btn-primary mb-4" to="/Home">
                Back
            </Link>
            <ul class="list-group">
                <li class="list-group-item">Employee Id: {_id}</li>
                <li class="list-group-item">Name: { employee.Name }</li>
                <li class="list-group-item">Address: { employee.Adress }</li>
                <li class="list-group-item">Email: { employee.Email }</li>
                <li class="list-group-item">Hire_date: {hd}</li>
                <li class="list-group-item">Salary: { employee.Salary }</li>
                <li class="list-group-item">Job_Title: { employee.Job_Title }</li>
            </ul>
        </div>
    )
}

export default ViewEmployee
