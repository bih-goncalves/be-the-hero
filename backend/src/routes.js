const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

// for ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// for incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// for incidents in ong space
routes.get('/profile', ProfileController.index);
module.exports = routes;
