// Only ES5 (old) is allowed in this file, but ES6 can be used in required files
require('babel-register');

// routes
const getRootUrl = require('../lib/api/getRootUrl').default;
const authGoogle = require('./google').default;
const authRoutes = require('./routes/authRoutes').default;
const setRoutes = require('./routes/setRoutes').default;
const routes = require('./routes');
// server dependencies
const express = require('express');
const expressSession = require('express-session');
const next = require('next');
const { join } = require('path');
const mongoose = require('mongoose');
const MongoSessionStore = require('connect-mongo')(expressSession);
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const useragent = require('express-useragent');

const dev = process.env.NODE_ENV !== 'production';
// eslint-disable-next-line
if (dev) require('dotenv').config(); // map .env file vars into process.env

// server config
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 4000;
const ROOT_URL = getRootUrl();
const { MONGO_URL, SESSION_SECRET } = process.env;

mongoose.connect(MONGO_URL);

// Nextjs's server preparation
app.prepare().then(() => {
  const server = express();
  server.use(cors()); // allow to request files from external domains
  server.use(compression()); // compress files for faster load of PWA
  server.use(bodyParser.json());

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
  setRoutes(server);

  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '..', '.next', req.originalUrl);
    app.serveStatic(req, res, filePath);
  });

  // server.get('/cardset/:id', (req, res) => {
  //   const actualPage = '/set';
  //   // console.log(req.params);
  //   const queryParams = {
  //     id: req.params.id,
  //   };
  //   app.render(req, res, actualPage, queryParams);
  // });

  // server.get('/set:title', (req, res) => { // used by browser
  //   const actualPage = '/cardset'; // used by server
  //   // console.log(req.params);
  //   const queryParams = {
  //     id: req.params.id,
  //   };
  //   app.render(req, res, actualPage, queryParams);
  // });

  server.use(useragent.express());
  server.get('/api/useragent', (req, res) => {
    res.send(req.useragent);
  });

  // server.get('*', (req, res) => handler(req, res));

  server.use(handler).listen(port, (err) => {
    if (err) throw err; // eslint-disable-next-line no-console
    console.log(`> Ready on ${ROOT_URL}`);
  });
})
  .catch((ex) => { // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
