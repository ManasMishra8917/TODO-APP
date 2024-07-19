import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TodoPage = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TodoPage;
