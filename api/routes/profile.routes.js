const express= require('express');
const router = express.Router();

const {profile}= require('../data/bankdata');

router.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Profile data fetched successfully',
        data:profile
    })
});
module.exports = router;