const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy();
const JwtStrategy = require("passport-jwt").Strategy();
const ExtraxtJwt = require("passport-jwt").ExtractJwt();
const jwtSecret = process.env.SECRET_KEY;
const db = require("../models");
const User = db.User;
const options = {
  jwtFromRequest: ExtraxtJwt.fromAuthHeadersAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
  new LocalStrategy({
    emailField: "email",
    passwordField: "password",
  }),
  async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user || !verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
);
passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      const user = await db.User.findByPk(payload.id);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);
module.exports = passport;
