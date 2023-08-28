const Post = require('../models/post');

module.exports.home = function(req,res){
    // return res.end('<h1>Express is up for codeial</h1>')
    // console.log(req.cookies);
    // res.cookie('user_id',187);

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"Codeial | Home",
    //         posts: posts
    //     });
    // });

    //populate the user for the each post
    Post.find({}).populate('user').exec(function(err,post){
        return res.render('home',{
            title:"Codeial | Home",
            posts: post
        });
    });
   
}