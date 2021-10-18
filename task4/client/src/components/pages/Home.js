import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {

    const [employees, setEmployee] = useState([]);
    const [employee, setEmployees] = useState({
        _id: '',
        Name: '',
        Adress: '',
        Email: '',
        Hire_date: new Date(),
        Salary: '',
        Job_Title: ''
    });

    const { _id, Name, Adress, Email, Hire_date, Salary, Job_Title } = employee;


    const onInputChange = e => {
        setEmployees({ ...employee, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {

        const res = await axios.get('http://localhost:3001/employees', {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        setEmployee(res.data);

    }

    const submitEmployee = async () => {

        await axios.post("http://localhost:3001/employees/add", employee,
        {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });

    };

    const deleteEmployee = async (_id) => {

        window.alert('Delete employee successfully')
        await axios.delete(`http://localhost:3001/employees/delete/${_id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        loadEmployees();

    };

    return (
        <div className="container">
            <div className="py-4">
                <button class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add Employee</button>
                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel1">Add Employee</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <input type="number"
                                            class="form-control mb-3"
                                            placeholder="Enter id....."
                                            name="_id"
                                            value={_id}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            class="form-control mb-3"
                                            placeholder="Enter name....."
                                            name="Name"
                                            value={Name}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            class="form-control mb-3"
                                            placeholder="Enter address....."
                                            name="Adress"
                                            value={Adress}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="email"
                                            class="form-control mb-3"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email....."
                                            name="Email"
                                            value={Email}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="date"
                                            class="form-control mb-3"
                                            placeholder="Enter hire date....."
                                            name="Hire_date"
                                            value={Hire_date}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="number"
                                            class="form-control mb-3"
                                            placeholder="Enter salary....."
                                            name="Salary"
                                            value={Salary}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            class="form-control mb-3"
                                            placeholder="Enter job title....."
                                            name="Job_Title"
                                            value={Job_Title}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" onClick={submitEmployee} class="btn btn-primary mt-3" data-bs-target="#exampleModalToggle1" data-bs-toggle="modal">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" onClick={() => window.location.reload(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Employee added successfully!
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table border shadow mt-4">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Hire_date</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Job_Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.sort((a, b) => a._id > b._id ? 1 : -1).map((emp) => (
                            <tr>
                                <th scope="row">{emp._id}</th>
                                <td>{emp.Name}</td>
                                <td>{emp.Adress}</td>
                                <td>{emp.Email}</td>
                                <td>{emp.Hire_date.substring(0, 10)}</td>
                                <td>{emp.Salary}</td>
                                <td>{emp.Job_Title}</td>
                                <td>
                                    <Link className="btn btn-primary me-2"
                                        to={`/employees/FindId/${emp._id}`}
                                        onClick={() => window.alert('Process view employee details confirmed!')}>
                                        View
                                    </Link>

                                    <Link className="btn btn-outline-primary me-2"
                                        to={`/employees/update/${emp._id}`}
                                        onClick={() => window.alert('Process editing employee details confirmed!')}>
                                        Edit
                                    </Link>
                                    <Link
                                        class="btn btn-danger"
                                        to="/"
                                        onClick={() => deleteEmployee(emp._id)}
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        )
                        )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Home;