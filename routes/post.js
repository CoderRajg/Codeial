// const { applicaion } = require('express');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/post-controller');

// router.get('/',postController.post);
// router.post('/create',postController.create);
router.post('/create',passport.checkAuthentication,postController.create);



module.exports = router;