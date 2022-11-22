require('./config/mongoose.config');
require("dotenv") 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const socket = require("socket.io");
const List = require("./models/zelda.model");
const path = require("path");

app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}));
// app.use(express.urlencoded({ extended: true }));

require('./routes/zelda.routes')(app);

app.use(express.static(path.resolve("The-Master-List", "client", "build")));
app.get('/*', function (req, res) {
    res.sendFile(path.join("The-Master-List", 'client', 'build', 'index.html'));
});

const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const io = socket(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("New User:", socket.id);
    socket.on("deleteList", (payload) => {
        List.findOneAndDelete({_id: payload})
            .then((list) => io.emit("listDeleted", payload))
            .catch((err) => console.log("err", err));
    });
    socket.on("disconnect", (socket) => {
        console.log(`User: ${socket.id} left`);
    });
});