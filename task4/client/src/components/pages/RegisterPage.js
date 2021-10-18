import React, {useState} from 'react'
import axios from "axios";
import { useHistory } from 'react-router';

function RegisterPage() {

    const history = useHistory()
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const createUser = async (e) => {
        e.preventDefault();
        const usr = await axios.post('http://localhost:3001/user/register', {
            username: user.username,
            email: user.email,
            password: user.password
        }).then( (data) => {
            console.log(data);
            window.alert('Register confirmed!');
            history.push('/');
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        );
        
    }


    return (
        <div>

            <section class="vh-100 bg-image">
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card">
                                    <form onSubmit={createUser} class="card-body p-5 bg-dark text-light">
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>


                                            <div class="form-outline mb-4">
                                                <input 
                                                type="text"
                                                id="form3Example1cg"
                                                class="form-control form-control-lg"
                                                onChange={(e) => {setUser({...user, username: e.target.value})}} />
                                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="email"
                                                 id="form3Example3cg"
                                                class="form-control form-control-lg"
                                                onChange={(e) => {setUser({...user, email: e.target.value})}} />
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" 
                                                id="form3Example4cg"
                                                class="form-control form-control-lg"
                                                onChange={(e) => {setUser({...user, password: e.target.value})}} />
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default RegisterPage
