
const express = require("express");
const router = express.Router();
const { userController: controller } = require("./user.module");
const upload = require("../../middleware/upload");



router.post("/", (req, res, next) => controller.postSignup(req, res, next));
router.post("/signup",(req,res,next)=>controller.postSignup(req,res,next))

router.get("/kakao", (req,res,next)=> controller.kakaoSignin(req,res,next))
router.get("/naver", (req,res,next)=> controller.naverSignin(req,res,next))

router.post("/kakocheck", (req,res,next)=>controller.kakaoCheck(req,res,next) )

router.post("/single", upload.single("filename"), (req, res) => {
    console.log(req.file)
    res.send(req.file);
});

module.exports = router
