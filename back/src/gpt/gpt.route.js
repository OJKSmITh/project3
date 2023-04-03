const express = require("express");
const router = express.Router();
const { gptController: controller } = require("./gpt.module");

router.post("/", (req, res, next) => controller.postText(req, res, next));

module.exports = router;
