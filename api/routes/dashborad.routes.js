const express = require('express');
const router = express.Router();
const{dashboard} = require('../data/bankdata');
router.get('/', (req,res)=>{
    res.json({
        success:true,
        message:'Dashboard data fetched successfully',
        data:dashboard
    })
})
module.exports=router;