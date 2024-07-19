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

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span>{task.status}</span>
          <button onClick={() => updateTask(task)}>Toggle Status</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
