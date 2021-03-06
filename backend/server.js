import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import reseauCyclableRouter from './routes/reseauCyclableRoutes.js';
// import {merchantAppApiRouting} from './routes/merchantOnboardRoutes'; // merchant Onboard api routes
// import * as mongoose from 'mongoose';
// import errorHandler from './_helpers/error-handler';
// import createLogger from './config/winLogger';

// const logger = createLogger(module);

// Server config
export default function createServer() {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(express.static('public'))
    app.use('', reseauCyclableRouter)
    return app;
}
