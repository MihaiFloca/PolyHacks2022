import createServer from './server.js';

const port = '8000';
const server = createServer();

server.listen(port, () => {
    console.log(`Starting server on port ${port}`);
})
