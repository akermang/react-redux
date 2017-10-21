const express = require('express');
const router = express.Router();

//mock data
var users = require('./mock/users.json')
var tasks = require('./mock/tasks.json')

router.get('/user', (req, res) => {
  res.send(users);
});

router.get('/task', (req, res) => {
  res.send(tasks);
});

router.get('/api/current-user', (req, res) => {
  res.send(users[0]);
});

module.exports = router;