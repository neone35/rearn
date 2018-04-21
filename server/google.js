import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

import User from './models/User';

export default function auth({ ROOT_URL, server }) {
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GoogleClientID,
      clientSecret: process.env.GoogleClientSecret,
      callbackURL: `${ROOT_URL}/oauth2callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('profile-id:', profile.id);
      // Sign in
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        done(null, existingUser); // no error!, here is user
      } else {
        // Sign up
        let email;
        let avatarUrl;

        if (profile.emails) {
          email = profile.emails[0].value;
        }

        if (profile.photos && profile.photos.length > 0) {
          avatarUrl = profile.photos[0].value.replace('sz=50', 'sz=128');
        }

        try {
          const newUser = await new User({
            googleId: profile.id,
            createdAt: new Date(),
            email,
            displayName: profile.displayName,
            avatarUrl,
          })
            .save(); // save to MongoDB
          done(null, newUser);
        } catch (err) {
          done(err);
            console.log(err); // eslint-disable-line
        }
      }
    },
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id); // Keep only userID in session cookie
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      done(null, user); // Get User model on every request
    });
  });

  server.use(passport.initialize());
  server.use(passport.session()); // Use expressSession

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
}
