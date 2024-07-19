import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TodoPage = () => {
  return (
    <div>
      <h2>Todo App</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TodoPage;
