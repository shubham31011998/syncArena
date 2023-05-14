const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

app.use(cors());

const server = http.createServer(app);
const CHAT_BOT = 'ChatBot';
let chatRoom = '';
let allUsers = [];

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('join_room', (data) => {
        const {userName, userRoom} = data;
        socket.join(userRoom);
        chatRoom = userRoom;
        allUsers.push({id: socket.id, userName, userRoom});
        chatRoomUsers = allUsers.filter((user) => user.userRoom === userRoom);
        socket.to(userRoom).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers);

        let __createdtime__ = Date.now();

        socket.to(userRoom).emit('receive_message', {
            message: `Welcome ${userName} in SyncArena's Room(${userRoom}) 😉`,
            username: CHAT_BOT,
            __createdtime__,
        });

        socket.emit('receive_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdtime__,
        });
    })

});

server.listen(4000, () => 'Server is running on port 3000');
