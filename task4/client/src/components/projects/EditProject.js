import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

function EditProject() {

    const history = useHistory()
    const { _id } = useParams();
    const [prj, setPrj] = useState({
        Project_name: '',
        Start_date: Date(),
        Planned_end_date: Date(),
        Description: '',
        Project_code: ''
    });

    const { Project_name, Start_date, Planned_end_date, Description, Project_code } = prj;


    const onInputChange = e => {
        setPrj({ ...prj, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadPrj();
    }, []);

    const updateProject = async (e) => {
        window.alert('Update Project successfully');
        e.preventDefault();
        await axios.put(`http://localhost:3001/projects/update/${_id}`, prj, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        history.push("/projects");
    };

    const loadPrj = async () => {
        const result = await axios.get(`http://localhost:3001/projects/FindById/${_id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        setPrj(result.data);
    }

    let sd = prj.Start_date.substring(0,10);
    let ped = prj.Planned_end_date.substring(0,10);
    console.log(sd)
    console.log(ped)

    return (
        <div className="container mt-4 w-75 mx-auto shadow p-5">
            <Link type="submit" class="btn btn-primary me-2" to="/projects">Back</Link>
            <h2 className="text-center mb-4">Edit Project</h2>
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
                        placeholder="Enter project name....."
                        name="Project_name"
                        value={Project_name}
                        onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control mb-3"
                        placeholder="dd-mm-yyyy"
                        name="Start_date"
                        value={sd}
                        onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control mb-3"
                        placeholder="dd-mm-yyyy"
                        name="Planned_end_date"
                        value={ped}
                        onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control mb-3"
                        placeholder="Enter description project....."
                        name="Description"
                        value={Description}
                        onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control mb-3"
                        placeholder="Enter project code....."
                        name="Project_code"
                        value={Project_code}
                        onChange={e => onInputChange(e)} />
                </div>

                <Link type="button" to="/projects" onClick={updateProject} class="btn btn-primary btn-block">Submit</Link>
            </form>

        </div>
    )
}

export default EditProject
