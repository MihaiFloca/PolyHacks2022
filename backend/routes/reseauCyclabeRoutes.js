import express from 'express';
import reseauCyclable from '../controllers/reseauCyclable.js';

const router = express.Router();

// Add routes here
router.get('/pisteCyclables', reseauCyclable.getAllPisteCyclable);

export default router;