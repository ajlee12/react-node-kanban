import app from './app';
import http from 'http';

const PORT = 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

server.on('error', (error) => {
  console.error(`Error occurred while starting server: ${error}`);
  throw error;
});