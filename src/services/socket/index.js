import io from 'socket.io-client';

const chat = io('http://localhost:3000/chat');

export default chat;
