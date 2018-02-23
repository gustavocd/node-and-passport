const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  callbackURL: '/auth/google/redirect',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({
    googleId: profile.id
  }).then(currentUser => {
    if (currentUser) {
      done(null, currentUser);
    } else {
      const user = new User({
        username: profile.displayName,
        googleId: profile.id,
        thumbnail: profile._json.image.url
      });
      user.save().then(newUser => {
        done(null, newUser);
      });
    }
  })
}));
