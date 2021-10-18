import React, {useState} from 'react'
import axios from "axios";
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";

function LoginPage() {

    const history = useHistory()
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const getUser = async (e) => {
        e.preventDefault();
        const usr = await axios.post('http://localhost:3001/login/user', {
            username: user.username,
            password: user.password
        }).then( (data) => {
            console.log(data);
            localStorage.setItem('token', data.data);
            history.push('/Home');
        }
        ).catch(
            (error) => {
                window.alert('LogIn failed!');
                console.log(error)
            }
        );
        
    }

    return (
        <div>
            <section class="vh-50 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white">
                                <div class="card-body p-5 text-center">

                                    <form onSubmit={getUser} class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p class="text-white-50 mb-5">Please enter your login and password!</p>
                                    
                                        <div class="form-outline form-white mb-4">
                                            <input 
                                            type="text" 
                                            id="typeEmailX" 
                                            class="form-control form-control-lg"
                                            onChange={(e) => {setUser({...user, username: e.target.value})}} />
                                            <label class="form-label" for="typeEmailX">Username</label>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <input type="password"
                                             id="typePasswordX"
                                              class="form-control form-control-lg"
                                              onChange={(e) => {setUser({...user, password: e.target.value})}} />
                                            <label class="form-label" for="typePasswordX">Password</label>
                                        </div>

                                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                        <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        <Link class="btn btn-outline-light btn-lg px-5 ms-2" type="submit" to="/register">Register</Link>

                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
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

export default LoginPage
