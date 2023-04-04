const express = require('express')
const router = express.Router()

const {controller} = require('./board.module')

router.get('/',(req,res,next)=>controller.getList(req,res,next))

router.post('/',(req,res,next)=>controller.postBoard(req,res,next))

module.exports = router