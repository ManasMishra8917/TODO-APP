import React, { useState } from 'react';
import socket from '../Socket';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', status: 'Yet to Start' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('addTask', task);
    setTask({ title: '', status: 'Yet to Start' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task title"
        required
      />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Yet to Start">Yet to Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
