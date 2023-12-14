const passport = require("passport")
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
// require('dotenv').config()

const  GOOGLE_CLIENT_ID = "972099544187-95oavs658aac56mc6cvg7v8o95d58bhf.apps.googleusercontent.com"
const  GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) => done(null, user))