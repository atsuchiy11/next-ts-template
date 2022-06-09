import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';

const AppServerConfig: restify.ServerOptions = {
  name: 'mock-api-server',
  version: '1.0.0',
};

const server = restify.createServer(AppServerConfig);

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['Authorization', 'Accept', 'X-API-Key'],
  exposeHeaders: ['Content-Disposition', 'WWW-Authenticate', 'x-amzn-remapped-www-authenticate'],
});

server.pre(cors.preflight);
server.use(cors.actual);

/** Describe API routing here */

server.get('/v1/hello/:name', (req, res, next) => {
  res.status(200);
  res.send(`Hello, ${req.params.name}`);
  return next();
});

export default server;
