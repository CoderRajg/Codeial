const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email, password, done){
        //find a user and establish the identity
        user.findOne({email: email}, function(err, user){
            if(err){
                console.log('Error in finding user --> passport');
                return done(err);
            }
            if(!user || user.passport != password){
                console.log('Invalid username or password');
                return done(null, false);
            }
            return done(null, user);
        })
    }
));

//serializing the user to decide which key is to kept in the cookie
passport.serializeUser(function(user,done){
    done(null, user.id);
})


// deserializing the user from the key in the cookie
passport.deserializeUser(function(id, done){
    user.findById(id, function(err,user){
        if(err){
            console.log('Error in finding user --> passport');
            return done(err);
        }

        return done(null, user);
    })
});


module.exports = passport;