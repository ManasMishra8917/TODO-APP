const { getTasks, addTask, updateTask, deleteTask } = require('../utils/inMemoryDB');

let io;

const initSocket = (serverIo) => {
  io = serverIo;

  io.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.emit('loadTasks', getTasks());

    socket.on('addTask', (task) => {
      const newTask = addTask(task);
      io.emit('taskAdded', newTask);
    });

    socket.on('updateTask', (task) => {
      const updatedTask = updateTask(task);
      io.emit('taskUpdated', updatedTask);
    });

    socket.on('deleteTask', (taskId) => {
      deleteTask(taskId);
      io.emit('taskDeleted', taskId);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = { initSocket, io };
