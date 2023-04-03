const express = require('express')
const router = express.Router()

const {controller} = require('./board.module')

router.get('/',(req,res)=>{
    res.send('board')
})

router.post('/',(req,res,next)=>controller.postBoard(req,res,next))

module.exports = router