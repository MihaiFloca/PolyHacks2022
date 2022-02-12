import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.js';
import reseauCyclablesRoutes from './routes/reseauCyclabeRoutes';
// import {merchantAppApiRouting} from './routes/merchantOnboardRoutes'; // merchant Onboard api routes
// import * as mongoose from 'mongoose';
import errorHandler from './_helpers/error-handler';
import createLogger from './config/winLogger';

const logger = createLogger(module);

// Server config
export default function createServer() {
    const app = express();
    app.use(cors());
    app.use('', indexRoutes);
    app.use('', reseauCyclablesRoutes)
    return app;
}
