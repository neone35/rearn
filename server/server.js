require('babel-register');

const getRootUrl = require('../lib/api/getRootUrl');
const authGoogle = require('./google');
const authRoutes = require('./routes/authRoutes');

const express = require('express');
const expressSession = require('express-session');
const next = require('next');
const { join } = require('path');
const mongoose = require('mongoose');
const MongoSessionStore = require('connect-mongo')(expressSession);
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
// eslint-disable-next-line
if (dev) require('dotenv').config(); // map .env file vars into process.env

const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 4000;
const ROOT_URL = getRootUrl();
const { MONGO_URL, SESSION_SECRET } = process.env;
const useragent = require('express-useragent');

mongoose.connect(MONGO_URL);

// Nextjs's server preparation
app.prepare().then(() => {
  const server = express();
  server.use(cors());

  server.use(expressSession({ // create session middleware object
    name: 'rearn.sid', // session objectID for browser, used to read from REQ / write to RES
    secret: SESSION_SECRET,
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

  authGoogle({ server, ROOT_URL });
  authRoutes(server);

  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '..', '.next', req.originalUrl);
    app.serveStatic(req, res, filePath);
  });

  server.get('/cardset/:title', (req, res) => {
    app.render(req, res);
  });

  server.use(useragent.express());
  server.get('/api/useragent', (req, res) => {
    res.send(req.useragent);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err; // eslint-disable-next-line no-console
    console.log(`> Ready on ${ROOT_URL}`);
  });
})
  .catch((ex) => { // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
