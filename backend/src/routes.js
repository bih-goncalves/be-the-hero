const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
  const body = req.body;

  console.log(body);
  return res.send('Hello my fucking world');
});

module.exports = routes;
