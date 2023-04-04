const express = require("express");
const router = express.Router();
const { authController: controller } = require("./auth.module");



router.post("/", (req, res, next) => controller.postLogin(req, res, next));
router.post("/sns", (req,res,next)=> controller.postSnsLogin(req,res,next))
router.post("/mail", (req,res,next)=> controller.postMailcheck(req,res,next))
router.post("/number", (req,res,next)=> controller.postNumbercheck(req,res,next))
module.exports = router;
