const FacebookUser = require("../models/facebookUsers")
const FacebookStrategy = require("passport-facebook");
const passportStra = function(passport) {
    passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "/api/auth/facebook/redirect",
            profileFields: ['id', 'email', 'photos', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
        },
        async(accessToken, refreshToken, profile, done) => {
            try {
                const newUser = new FacebookUser({
                    facebookId: profile.id,
                    firstName: profile._json.first_name,
                    lastName: profile._json.last_name,
                    profilepic: profile._json.picture.data.url
                })
                let user = await FacebookUser.findOne({ facebookId: profile.id });
                if (user) {
                    done(null, user)
                } else {
                    user = await FacebookUser.create(newUser);
                    done(null, user)
                }
            } catch (err) {
                console.error(err)
            }

        }
    ));
    passport.serializeUser(function(user, done) {
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log("hi");
        console.log(id)
        FacebookUser.findById(id, function(err, user) {
            console.log(user);
            done(err, user);
        });
    });
}
module.exports = passportStra