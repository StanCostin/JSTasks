import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const EditEmployee = () => {

    const history = useHistory()
    const { _id } = useParams();
    const [emp, setEmp] = useState({
        Name: '',
        Adress: '',
        Email: '',
        Hire_date: Date(),
        Salary: 0,
        Job_Title: ''
    });

    const { Name, Adress, Email, Hire_date, Salary, Job_Title } = emp;


    const onInputChange = e => {
        setEmp({ ...emp, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadEmp();
    }, []);

    const updateEmployee = async (e) => {
        window.alert('Update');
        e.preventDefault();
        await axios.put(`http://localhost:3001/employees/update/${_id}`, emp, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        history.push("/Home");
    };

    const loadEmp = async () => {
        const result = await axios.get(`http://localhost:3001/employees/FindById/${_id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        setEmp(result.data);
        console.log(result.data);
    }

    let hd = emp.Hire_date.substring(0,10);
    console.log(hd);

    return (

        <div className="container mt-4 w-75 mx-auto shadow p-5">
            <Link type="submit" class="btn btn-primary me-2" to="/Home">Back</Link>
            <h2 className="text-center mb-4">Edit a Employee</h2>
            <form>
            <div className="form-group">
                <input type="number"
                    className="form-control mb-3"
                    placeholder="Enter id....."
                    name="_id"
                    value={_id}
                    onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter name....."
                    name="Name"
                    value={Name}
                    onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter address....."
                    name="Adress"
                    value={Adress}
                    onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="email"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email....."
                    name="Email"
                    value={Email}
                    onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text"
                    className="form-control mb-3"
                    placeholder="dd-mm-yyyy"
                    name="Hire_date"
                    value={hd}
                    onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="number"
                    className="form-control mb-3"
                    placeholder="Enter salary....."
                    name="Salary"
                    value={Salary}
                    onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter job description....."
                    name="Job_Title"
                    value={Job_Title}
                    onChange={e => onInputChange(e)} />
            </div>
            
            <Link type="button" to="/Home" onClick={updateEmployee} class="btn btn-primary btn-block">Submit</Link>
            </form>

        </div>

    )
}

export default EditEmployee