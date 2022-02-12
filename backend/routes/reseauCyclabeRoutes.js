import express from 'express';
import reseauCyclable from '../controllers/reseauCyclable.js';

const reseauCyclableRouter = express.Router();

// Add routes here
reseauCyclableRouter.get('/pisteCyclables', reseauCyclable.getAllPisteCyclable);

export default reseauCyclableRouter;