import { useEffect, useState } from 'react';
import MainLook from '../components/MainLook.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [dash, setDash] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:5500/dashboard')
            .then((res) => {
                res.json();
            })
            .then((dash) => {
                setDash(dash);
                setLoading(false)
            })
            .catch(error => {
                setError('Problem loading dashboard!', error);
                setLoading(false);

                navigate('/login');
            });
    }, [navigate]);

    if (loading) return <div className='message'>Loading... <i>◌</i></div>
    if (error) return <div className='message'>Error: {error.message}</div>

    return (
        <MainLook>
            <div className='dashboard_page'>
                <h2>Dashboard</h2>
                <p>{dash}</p>
                <Link to="/tasks">View Tasks...</Link>
            </div>
        </MainLook>
    );

}

export default Dashboard;