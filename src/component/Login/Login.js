import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UseAuth from '../../hooks/UseAuth';
import './login.css';
import icon from './../../img/logo/gmail.png';

const Login = () => {
    // email auth Set..............
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();


    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    console.log(location.state?.from);

    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    // email login.........................
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 character long');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div className="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Please Login</h1>

                <form onSubmit={handleLogin} >
                    <div className="d-flex justify-content-center">
                        <div className="mb-3">
                            <div className="form-group">
                                <input className="form-control" onBlur={handleEmail} type="email" placeholder="Email" required />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" onBlur={handlePass} type="password" placeholder="Password" required />
                                <p className="text-danger">{error}</p>
                            </div>
                            <br />
                            <div className="form-group">
                                <button className="btn btn-color w-100" type="submit">Login</button>
                            </div>
                        </div>
                    </div>

                </form>

                <p>New User? <Link to="/registration">Registration</Link></p>
                <div>-----------Login With-----------</div>
                <button onClick={handleGoogleLogin} className="btn bg-color mt-3 border"><img src={icon} alt="" height="30" /></button>

            </div>
        </div>
    );
};

export default Login;