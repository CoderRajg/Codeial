// module.exports.comments = function(req,res){
//     return res.end('<h1>Comments kr dena bro!</h1>')
// }

const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req,res){
        Post.findById(req.body.post, function(err,post){
            if(post){
                comment.create({
                    content: req.body.content,
                    post: req.body.post,
                    user: req.user._id
                }, function(err,comment){
                    if(err){console.log('there i error in adding a comment'); return;}
                    post.comments.push(comment);
                    post.save();

                    res.redirect('/');
                });
            }
        });
}