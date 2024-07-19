import React, { useEffect, useState } from 'react';
import socket from '../Socket';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on('loadTasks', (loadedTasks) => setTasks(loadedTasks));
    socket.on('taskAdded', (task) => setTasks((prevTasks) => [...prevTasks, task]));
    socket.on('taskUpdated', (updatedTask) => {
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    });
    socket.on('taskDeleted', (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });

    return () => {
      socket.off('loadTasks');
      socket.off('taskAdded');
      socket.off('taskUpdated');
      socket.off('taskDeleted');
    };
  }, []);

  const updateTask = (task) => {
    const updatedStatus = task.status === 'Completed' ? 'Yet to Start' : 'Completed';
    socket.emit('updateTask', { ...task, status: updatedStatus });
  };

  const deleteTask = (taskId) => {
    socket.emit('deleteTask', taskId);
  };
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const taskTitleStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const taskStatusStyle = (status) => ({
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: status === 'completed' ? '#4caf50' : '#f44336',
    color: '#fff',
  });

  const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const toggleButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#008cba',
    color: '#fff',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: '#fff',
  };

  return (
    <ul style={listStyle}>
    {tasks.map((task) => (
      <li key={task.id} style={listItemStyle}>
        <span style={taskTitleStyle}>{task.title}</span>
        <span style={taskStatusStyle(task.status)}>{task.status}</span>
        <button style={toggleButtonStyle} onClick={() => updateTask(task)}>
          Toggle Status
        </button>
        <button style={deleteButtonStyle} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  );
};

export default TaskList;
