import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import UseAuth from '../../hooks/UseAuth';
import icon from './../../img/logo/gmail.png';


const Registration = () => {
    // email auth Set..............
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();


    const { signInUsingGoogle } = UseAuth();
    const location = useLocation();
    // console.log(location.state?.from);

    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    // email Auth.............................
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        if (password.length < 6) {
            setError('Password must be at least 6 character long');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                setError('');
                history.push('/login');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div className="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Create An Account</h1>

                <form onSubmit={handleRegistration}>
                    <div className="d-flex justify-content-center">
                        <div className="mb-3">
                            <div className="form-group">
                                <input className="form-control" onBlur={handleName} type="text" placeholder="Full Name" required />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" onBlur={handleEmail} type="email" placeholder="Email" required />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" onBlur={handlePass} type="password" placeholder="Password" required />
                                <p className="text-danger">{error}</p>
                            </div>
                            <br />
                            <div className="form-group">
                                <button className="btn btn-color w-100" type="submit">Registration</button>
                            </div>
                        </div>
                    </div>

                </form>

                <p>Already Have an Account? <Link to="/login">Login</Link></p>
                <div>---------Registration With---------</div>
                <button onClick={handleGoogleLogin} className="btn bg-color mt-3 border"><img src={icon} alt="" height="30" /></button>

            </div>
        </div>
    );
};

export default Registration;















