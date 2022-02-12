import express from 'express';
import cors from 'cors';
import routes from './routes/reseauCyclableRoutes.js';
import bodyParser from 'body-parser';

// Server config
export default function createServer() {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use('', routes);
    return app;
}
