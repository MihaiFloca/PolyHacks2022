import express from 'express';
import APIController from '../controllers/APIController.js';
import reseauCyclable from '../controllers/reseauCyclable.js';

const reseauCyclableRouter = express.Router();

reseauCyclableRouter.get('/findCoordinates', APIController.getCoordinates);
reseauCyclableRouter.get('/findRoute', APIController.getRoute);
reseauCyclableRouter.get('/pisteCyclables', reseauCyclable.getAllPisteCyclable);

// Add routes here
export default reseauCyclableRouter;








