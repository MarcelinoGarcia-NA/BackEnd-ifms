const express = require('express');
const routes = express.Router();

const campusController = require('../controllers/campusController');

routes.get('/campi', campusController.buscarCampi);
routes.get('/campus/:id', campusController.buscarCampus);
routes.post('/campus', campusController.criarCampus);
routes.get('/campusaquidauana', campusController.criarCampiAquidauana);
routes.delete('/campus/:id', campusController.deletarCampus);
routes.put('/campus/:id', campusController.atualizarCampus);


module.exports = routes;
