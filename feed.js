const express = require('express');
const dataController = require('../controllers/data');

const app = express();
const router = express.Router();

router.get('/getnews', dataController.getPosts);

module.exports = router;