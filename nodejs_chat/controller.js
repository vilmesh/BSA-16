const fs = require('fs');

exports.sockets = (req, res) => {
  res.sendFile(__dirname + '/public/socket.html');
};

exports.ajax = (req, res) => {
  res.sendFile(__dirname + '/public/ajax.html');
};

exports.getHistory = (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(data);
    }
  });
};

exports.postNewMessage = (req, res) => {

  fs.readFile('./data.json', 'utf8', (err, file) => {
    if (err) {
      res.send(err.message);
    } else {
      let history = JSON.parse(file);
      let data = req.body;
      history.push(data);
      fs.writeFile('./data.json', JSON.stringify(history), 'utf8', (err, history) => {
        if (err) {
          res.send(err.message);
        } else {
          res.send(history);
        }
      });
    }
  });

};