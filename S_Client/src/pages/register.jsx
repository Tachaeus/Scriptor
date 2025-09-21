import { useState } from "react";
import MainLook from '../components/MainLook.jsx';
import Axios from "axios";
import { Link } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [registered, setRegistered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleUsernameChange = (u) => {
        setUsername(u.target.value);
    }

    const handlePasswordChange = (p) => {
        setPassword(p.target.value);
    }

    const handleRememberMeChange = (r) => {
        setRememberMe(r.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const registrationInfo = {
            username,
            password,
            rememberMe,
        }

        Axios
            .post('http://127.0.0.1:5500/register', registrationInfo)
            .then(() => {
                setUsername(username);
                setPassword(password);
                setRememberMe(rememberMe);
                alert('Registration successful! You can now log in.');

                setLoading(false);
            })
            .catch(error => {
                setError(error);
                alert('Registration failed! Please try again.');

                setLoading(false);
            });
        setRegistered(true);
    }

    if (loading) return <div className='message'>Loading... <i>◌</i></div>
    if (error) return <div className='message'>Error: {error.message}</div>

    return (
        <MainLook>
            {
                registered ? (
                    <div className="message">
                        <span>Welcome to Scriptor, {username}!</span>
                        <Link to='/dashboard'><button>Continue</button></Link>
                    </div>
                ) : (
                    <div className="register_page">
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username</label><br />
                            <input
                                minLength={3}
                                name='username'
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            /><br /><br />
                            <label htmlFor="password">Password</label><br />
                            <input
                                minLength={8}
                                maxLength={16}
                                name='password'
                                type="text"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            /><br /><br />
                            <div className='remember_forgot'>
                                <span>
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                    /><p>Remember me</p>
                                </span>
                            </div>
                            <button type='submit'>Register</button>
                        </form><br />
                        <Link to={'/login'}>Already have an account?</Link>
                    </div>
                )
            }
        </MainLook>
    )
}

export default Register;