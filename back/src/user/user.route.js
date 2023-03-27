const express = require('express')
const router = express.Router()
// const controller = require() 컨트롤러

router.get('/',(req,res)=>{
    res.send('user')
})

module.exports = router