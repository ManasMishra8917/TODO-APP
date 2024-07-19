let tasks = [];
let users = [];

const getTasks = () => tasks;

const addTask = (task) => {
  task.id = Date.now();
  tasks.push(task);
  return task;
};

const updateTask = (updatedTask) => {
  tasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
  return updatedTask;
};

const deleteTask = (taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
};

const addUser = (user) => {
  users.push(user);
};

module.exports = { getTasks, addTask, updateTask, deleteTask, users, addUser };
