const User = require('../models/user');

module.exports.profile = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                    return res.render('user_profile',{
                        title: "User profile",
                        user: user
                    })
            }
            return res.redirect('/users/sign-in');
        })
    }else{
        return res.redirect('/users/sign-in');
    }

    return res.render('user_profile',{
        title: "codeial | profile"
    })
}

//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "codeial | sign up"
    })
}

//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "codeial | Sign In"
    })
}

//get the sign up data
module.exports.create = function(req,res){
    //to do later
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('there is error in signing up'); return}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('there is error in creating user while signing up'); return}

                return res.redirect('/user/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })
}

//sign in and create the session for the user
module.exports.createSession = function(req,res){
    //to do later
    //find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('there is error in signing up'); return}
        // handle usser found 
        if(user){
            //handle password which don't match
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id',user.id);
            res.resdirect('/user/profile');

        }else{
            //handle user not found
            return res.redirect('back');

        }
    })

}