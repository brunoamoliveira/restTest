const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// POST /feed/post
router.post('/usuarios', feedController.createPost);

module.exports = router;