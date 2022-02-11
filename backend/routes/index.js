import express from 'express';
import temperatureData from '../controllers/TemperatureData.js';

const router = express.Router();

// Add routes here
router.get('/sensors/temperature/:n', temperatureData.GET);

export default router;