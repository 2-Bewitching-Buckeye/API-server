const express = require('express');
const {reviewsController} = require('../controller/reviewsController.js');

const router = express.Router();

router.get('/', reviewsController);


module.exports = router;