const passport = require('passport');

const authRoutes = (server) => {
  server.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account',
    }),
  );

  server.get(
    '/oauth2callback',
    passport.authenticate('google', {
      failureRedirect: '/login',
    }),
    (req, res) => {
      res.redirect('/');
    },
  );

  server.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });

  server.get('/api/current_user', (req, res) => {
    // res.send(req.session.passport.user);
    res.send(req.user);
  });

  server.get('/api/current_session', (req, res) => {
    res.send(req.session);
  });
};

export default authRoutes;
