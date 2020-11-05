const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const { builtinModules } = require("module")

function initialize(passport) {

    const authenticateUser = async (name, password, done) => {
        const user = getUserByName(name)
        if (user == null) {
            return done(null, false, { message: "Ingen bruker med det navnet" })
        }

        try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Feil passord" })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: "name" }), authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initialize;