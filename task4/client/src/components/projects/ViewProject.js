import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ViewProject() {

    const { _id } = useParams();
    const [project, setProject] = useState({
        Project_name: '',
        Start_date: Date(),
        Planned_end_date: Date(),
        Description: '',
        Project_code: ''
    });

    useEffect(() => {
        loadProject();
    }, []);
    const loadProject = async () => {
        const result = await axios.get(`http://localhost:3001/projects/FindById/${_id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        setProject(result.data);
        console.log(result.data);
    };

    let sd = project.Start_date.toString().substring(0,10);
    let ped = project.Planned_end_date.toString().substring(0,10);

    return (
        <div className="container py-4">
            <Link className="btn btn-primary mb-4" to="/projects">
                Back
            </Link>
            <ul class="list-group">
                <li class="list-group-item">ProjectId: {_id}</li>
                <li class="list-group-item">Project_name: { project.Project_name }</li>
                <li class="list-group-item">Start_date: { sd }</li>
                <li class="list-group-item">Planned_end_date: { ped }</li>
                <li class="list-group-item">Description: { project.Description }</li>
                <li class="list-group-item">Project_code: { project.Project_code }</li>
            </ul>
        </div>
    )
}

export default ViewProject
