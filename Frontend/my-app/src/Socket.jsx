import { io } from 'socket.io-client';

const socket = io('https://todo-app-eraf.onrender.com');

export default socket;
