const express = require('express');
const next = require('next');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/service-worker.js', (req, res) => {
      const filePath = join(__dirname, '.next', req.originalUrl);
      app.serveStatic(req, res, filePath);
    });

    server.get('/cardset/:title', (req, res) => {
      app.render(req, res);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(4000, (err) => {
      if (err) throw err; // eslint-disable-next-line no-console
      console.log('> Ready on http://localhost:4000');
    });
  })
  .catch((ex) => { // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
