import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

import User from './models/User';

const dev = process.env.NODE_ENV !== 'production';

async function signUp(done, profile) {
  try {
    const newUser = await new User({
      googleId: profile.id,
      createdAt: new Date(),
      email: profile.emails[0].value,
      displayName: profile.displayName,
      avatarUrl: profile.photos[0].value.replace('sz=50', 'sz=128'),
    })
      .save(); // save to MongoDB
    done(null, newUser);
  } catch (err) {
    done(err);
    console.log(err); // eslint-disable-line
  }
}

export default function auth({ ROOT_URL, server }) {
  passport.use(new GoogleStrategy(
    {
      clientID: dev ? process.env.GoogleClientIDDev : process.env.GoogleClientIDProd,
      clientSecret: dev ? process.env.GoogleClientSecretDev : process.env.GoogleClientSecretProd,
      callbackURL: `${ROOT_URL}/oauth2callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      // Check if user exists
      if (existingUser) {
        done(null, existingUser); // no error!, here is user
      } else {
        signUp(done, profile);
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
}
