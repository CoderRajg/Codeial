const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    //include the arrays of ids of all cooments in this post schema itself
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments"
        }
    ]
},{
    timestamps: true
});

const Post = mongoose.model('post',postSchema);
module.exports = Post;