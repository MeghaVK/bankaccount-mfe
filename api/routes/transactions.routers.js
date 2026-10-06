const express = require('express');
const router = express.Router();
const {transactions} = require('../data/bankdata');

router.get('/',(req,res)=>{
    res.json({
        success:true,
        message:'Transactions data fetched successfully',
        data:transactions
    })
})
router.get('/:id',(req,res)=>{
    const id= Number(req.params.id);

    const transactions = transactions.find(
        item=>item.id===id
    )
    if(!transactions){
        return res.json({
            success:false,
            message:'Transaction not found',
            data:null
        })
    
        
    }
    
    res.json({
        sucess:true,
        message:'Transaction fetched successfully',
        data:transactions
    })

})

module.exports = router