



const express= require('express');

const{ authenticateToken }= require('../middleware/auth.middleware');

const transactions  = require('../data/transactions-data');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  try {
    res.json({
      success: true,
      transactions
    });
  } catch (error) {
    console.error('GET /api/transactions failed:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch transactions'
    });
  }
});
module.exports = router;