



const express= require('express');

const{ authenticateToken }= require('../middleware/auth.middleware');

const transactions  = require('../data/transactions-data');

const router = express.Router();

router.get(
    '/',
    authenticateToken,
    (req,res)=>{
        res.json({
            success:true,
            transactions
        })
    }
)
module.exports = router;