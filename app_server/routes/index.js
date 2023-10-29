const express = require('express');
const router = express.Router();

/* GET home page. */
const ctrlMain = require('../controllers/main');

/* GET homepage*/
router.get('/', ctrlMain.index); 

module.exports = router;
