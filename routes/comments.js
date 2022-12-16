const express = require('express');
const router = express.Router();

const commentscontroller = require('../controllers/comments_controller');

router.get('/',commentscontroller.comments);

module.exports = router;