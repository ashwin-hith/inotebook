const express = require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    const ap={
        "name":"ashwin",
        "age":"20"
    }
    res.json([ap])
})

module.exports=router