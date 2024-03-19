const express = require('express');
const routes = express.Router();

const campusController = require('../controllers/campusController');

routes.get('/campus', campusController.buscarCampus);
routes.get('/campi/:id', campusController.buscarCampi);
routes.post('/campi', campusController.criarCampi);
routes.get('/campiaquidauana', campusController.criarCampusAquidauana);
routes.delete('/campi/:id', campusController.deletarCampi);
routes.put('/campi/:id', campusController.atualizarCampi);


module.exports = routes;
