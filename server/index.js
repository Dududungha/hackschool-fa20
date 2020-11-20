const express = require('express');
const cors = require('cors');
const config = require('./config');
const server = express();
const mongoose = require('mongoose');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.use('/api', require('./api'));

mongoose.connect(config.databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true }).then(() => {
console.log('Connected to MongoDB database');
});


server.listen(config.PORT, () => {
  console.log('Server started on port ' + config.PORT);
});

