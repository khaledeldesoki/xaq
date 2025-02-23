import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', employeeAddress: '' });
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/tasks', task);
    history.push('/');
  };

  return (
    <div>
      <h2>New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={task.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={task.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Employee Address</label>
          <input type="text" name="employeeAddress" value={task.employeeAddress} onChange={handleChange} required />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;