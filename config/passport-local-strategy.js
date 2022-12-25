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
            console.log(user);
            if(!user || user.password != password){
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

// check if user is suthenticated
passport.checkAuthentication = function(req,res,next){
    //if user is signed in,then pass on the request to the next function(controller's function)
    if(req.isAuthenticated()){
        return next();
    }

    //if user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // req.user contains the currect signed in user from the session cookie and we r just sending this to locals for the views
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;