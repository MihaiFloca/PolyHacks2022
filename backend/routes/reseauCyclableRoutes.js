import express from 'express';
import APIController from '../controllers/APIController.js';

const router = express.Router();

// Add routes here
router.get('/findCoordinates', APIController.getCoordinates);
router.post('/findRoute', APIController.postRoute);

export default router;