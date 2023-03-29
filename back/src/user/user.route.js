
const express = require("express");
const router = express.Router();
const { userController: controller } = require("./user.module");
const upload = require("../../middleware/upload");



router.post("/", (req, res, next) => controller.postSignup(req, res, next));




router.post("/single", upload.single("filename"), (req, res) => {
    console.log(req.file)
    res.send(req.file);
});

module.exports = router

