import { useEffect, useState } from 'react';
import Axios from 'axios';
import MainLook from '../components/MainLook.jsx';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [TName, setTName] = useState("");
  const [due, setDue] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTNameChange = (n) => {
    setTName(n.target.value);
  }

  const handleDueChange = (t) => {
    setDue(t.target.value);
  }

  const handleDescriptionChange = (d) => {
    setDescription(d.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      TName,
      due,
      description,
    }

    Axios
      .post('http://127.0.0.1:5500/tasks', task)
      .then(() => {
        setTasks([...tasks, task]);
        setTName('');
        setDue('');
        setDescription('');
        setLoading(false);
      })
      .catch((error) => {
        setError('Problem adding task!', error);
        alert('Session expired, please login again!');

        setLoading(false);
      })
  }

  useEffect(() => {
    fetch('http://127.0.0.1:5500/tasks')
      .then(res => res.json())
      .then((tasks) => {
        setTasks(tasks);
        setLoading(false);
      })
      .catch(error => {
        setError('Problem fetching tasks..!', error.message);
        setLoading(false);
      })
  }, []);

  if (loading) return <div className='message'>Loading...<i>◌</i></div>
  if (error) return <div className='message'>Error: {error.message}</div>

  return (
    <MainLook>
      <h2>Tasks</h2>
      <div className='tasks_page'>

        <div className="task_collector">
          <h3>Add a task Here</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="TName">Task Name:</label>
            <input
              type="text"
              id='TName'
              placeholder='Task name'
              value={TName}
              onChange={handleTNameChange}
              required
            /><br />
            <label htmlFor="due">Due on:</label>
            <input
              type="date"
              id='due'
              value={due}
              onChange={handleDueChange}
              required
            /><br />
            <label htmlFor="description">Task Description (optional)</label><br />
            <textarea
              name="description"
              id="description"
              cols={40}
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button>Create</button>
          </form>
        </div>

        <div className="task_list">
          <h3>Your Tasks</h3>
          <ul>
            {tasks.map((task) => (
              <li key={task?.TName}>
                <span>{task.TName}</span>
                <span>{task.due}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </MainLook>
  )
}

export default Tasks;