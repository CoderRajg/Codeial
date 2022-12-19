module.exports.profile = function(req,res){
    res.end('<h1>Users profile</h1>')
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
}

//sign in and create the session for the user
module.exports.createSession = function(req,res){
    //to do later
}