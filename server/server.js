import getRootUrl from '../lib/api/getRootUrl';
import auth from './google';

const express = require('express');
const expressSession = require('express-session');
const next = require('next');
const { join } = require('path');
const mongoose = require('mongoose');
const MongoSessionStore = require('connect-mongo')(expressSession);

require('dotenv').config(); // map .env file vars into process.env

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 4000;
const ROOT_URL = getRootUrl();
const { MONGO_URL } = process.env;

mongoose.connect(MONGO_URL);

// Nextjs's server preparation
app.prepare().then(() => {
  const server = express();

  server.use(expressSession({ // create session middleware object
    name: 'rearn.sid', // session objectID for browser, used to read from REQ / write to RES
    secret: 'HD2w.)q*VqRT/bgf.4/#NK2M/,E^B)}FED5ftger4-ggh7781WU!dKe[wk',
    store: new MongoSessionStore({ // create 'sessions' collection
      mongooseConnection: mongoose.connection,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { // browser options
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000, // save session for 14 days
    },
  }));

  auth({ server, ROOT_URL });

  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '.next', req.originalUrl);
    app.serveStatic(req, res, filePath);
  });

  server.get('/cardset/:title', (req, res) => {
    app.render(req, res);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err; // eslint-disable-next-line no-console
    console.log('> Ready on http://localhost:4000');
  });
})
  .catch((ex) => { // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
