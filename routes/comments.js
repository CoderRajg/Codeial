const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentscontroller = require('../controllers/comments_controller');

router.post('/create',passport.checkAuthentication, commentscontroller.create);

module.exports = router;