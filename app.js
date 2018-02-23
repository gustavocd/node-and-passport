require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSesion = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const passportSetup = require('./config/passport-setup');

const app = express();

mongoose.connect(process.env.DATABASE_URL)
  .then(res => console.log('Connected to mlab'))
  .catch(err => console.log(err));

app.use(cookieSesion({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.listen(process.env.PORT, () => {
  console.log('App running in port 3000');
});
