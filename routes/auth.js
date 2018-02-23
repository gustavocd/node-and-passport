const passport = require('passport');
const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (req.user) {
    res.redirect('/profile');
  } else {
    next();
  }
}

router.get('/login', authCheck, (req, res) => {
  res.render('login', { user: req.user, title: 'Login' });
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/profile/');
});

module.exports = router;
