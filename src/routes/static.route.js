const express = require('express');
const StaticController = require('../controllers/StaticController');
const router = express.Router();

// Router Controller
// Router GUI
router.get('/introduce', [StaticController.getUI]);

module.exports = router;
