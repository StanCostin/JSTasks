import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({
        _id: '',
        Project_name: '',
        Start_date: new Date(),
        Planned_end_date: new Date(),
        Description: '',
        Project_code: ''
    });

    const { _id, Project_name, Start_date, Planned_end_date, Description, Project_code } = project

    const onInputChange = e => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        const res = await axios.get('http://localhost:3001/projects', {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        console.log(res.data)
        setProjects(res.data);
    }

    const onSubmitProject = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/projects/add", project, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        loadProjects();
    };

    const deleteProject = async (_id) => {

        window.alert('Delete project successfully');
        await axios.delete(`http://localhost:3001/projects/delete/${_id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });

    };

    return (
        <div className="container">

            <div className="py-4">
                <button class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Project</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Project</h5>
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
                                            placeholder="Enter Project name....."
                                            name="Project_name"
                                            value={Project_name}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="date"
                                            class="form-control mb-3"
                                            placeholder="Enter start date....."
                                            name="Start_date"
                                            value={Start_date}
                                            onChange={e => onInputChange(e)} />
                                    </div>

                                    <div class="form-group">
                                        <input type="date"
                                            class="form-control mb-3"
                                            placeholder="Enter planned....."
                                            name="Planned_end_date"
                                            value={Planned_end_date}
                                            onChange={e => onInputChange(e)} />
                                    </div>

                                    <div class="form-group">
                                        <input type="text"
                                            class="form-control mb-3"
                                            placeholder="Enter project description....."
                                            name="Description"
                                            value={Description}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                            class="form-control mb-3"
                                            placeholder="Enter project code....."
                                            name="Project_code"
                                            value={Project_code}
                                            onChange={e => onInputChange(e)} />
                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={onSubmitProject} type="button" class="btn btn-primary mt-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" onClick={() => window.location.reload(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Project added successfully!
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table border shadow mt-4">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">ProjectName</th>
                            <th scope="col">Start_date</th>
                            <th scope="col">Planned_end_date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Project_code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.sort((a, b) => a._id > b._id ? 1 : -1).map((project) => (
                            <tr>
                                <th scope="row">{project._id}</th>
                                <td>{project.Project_name}</td>
                                <td>{project.Start_date.substring(10, -1)}</td>
                                <td>{project.Planned_end_date.substring(10, -1)}</td>
                                <td>{project.Description}</td>
                                <td>{project.Project_code}</td>
                                <td>
                                    <Link className="btn btn-primary me-2"
                                        to={`/projects/FindId/${project._id}`}
                                        onClick={() => window.alert('View detail project!')}
                                    >
                                        View
                                    </Link>

                                    <Link className="btn btn-outline-primary me-2"
                                        to={`/projects/update/${project._id}`}
                                        onClick={() => window.alert('Edit detail project!')}>
                                        Edit
                                    </Link>

                                    <Link class="btn btn-danger"
                                        to="/projects"
                                        onClick={() => deleteProject(project._id)}>
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

export default Projects;