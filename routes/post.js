// const { applicaion } = require('express');
const express = require('express');
const router = express.Router();

const postController = require('../controllers/post_controller');

// router.get('/',postController.post);
router.post('/create',postController.create);



module.exports = router;