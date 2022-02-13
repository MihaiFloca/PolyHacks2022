import createServer from './server.js';
import assemblyAiService from './services/assemblyAiService.js';

const port = '8000';
const server = createServer();
const ai = assemblyAiService.getDestinationSTT();

server.listen(port, () => {
    console.log(`Starting server on port ${port}`);
})
