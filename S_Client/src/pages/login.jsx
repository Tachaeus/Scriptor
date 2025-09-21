import { useState } from 'react';
import MainLook from '../components/MainLook.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

    Axios
      .post('http://127.0.0.1:5500/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        setData(res.data.message);
        navigate('/dashboard');
        alert('Login successful!');

        setLoading(false);
      })
      .catch(error => {
        setError('Login failed: ', error);
        alert('Login failed! Please try again.');
        
        setLoading(false);
      });
  }

  if (loading) return <div className='message'>Loading... <i>◌</i></div>
  if (error) return <div className='message'>Error: {error.message}</div>

  return (
    <MainLook>
      <div className='login_page'>
        <h2>Login</h2>
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
            minLength={10}
            maxLength={15}
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
              />
              <p>Remember me</p>
            </span>
            <p>Forgot Password?</p>
          </div>
          <button type='submit'>Login</button>
        </form><br />
        <Link to={'/register'}>Don't have an account?</Link>
      </div>
    </MainLook>
  )
}

export default Login;
