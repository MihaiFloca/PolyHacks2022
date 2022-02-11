import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

// Server config
export default function createServer() {
    const app = express();
    app.use(cors());
    app.use('', routes);
    return app;
}
