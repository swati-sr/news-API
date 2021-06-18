const express = require('express');
const feedController = require('../controllers/feed');

const app = express();
const router = express.Router();

router.get('/getnews', feedController.getPosts);

module.exports = router;