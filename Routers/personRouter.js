const express = require('express')
const personBLL = require('../BLLs/jsonfileBLL')

router = express.Router()

router.get('/',async(req,res)=>{
    try{const data =await personBLL.getData()
    res.status(200).json(data)}
    catch(e){
        res.status(500).json(e)
    }
    
})


module.exports = router