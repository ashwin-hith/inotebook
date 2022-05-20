const express = require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    const ap={
        "Bookname":"Python Programming",
        "Version":"2"
    }
    res.json([ap])
})

module.exports=router