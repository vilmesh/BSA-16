const express = require('express');
const fs = require('fs');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const router = require('./router');

let app = express();
let server = app.listen(8080);
let io = socket(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


io.on('connection', socket => {
  console.log(`Client connected`);
  
  socket.emit('history', fs.readFileSync('./data.json', 'utf8'));
  
  socket.on('msg', msg => {
    fs.readFile('./data.json', 'utf8', (err, file) => {
      let history = JSON.parse(file);
      history.push(msg);
      fs.writeFile('./data.json', JSON.stringify(history), 'utf8', () => io.emit('msg', msg));
    });
  });
  
  
});