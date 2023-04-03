const express = require("express");
const router = express.Router();
const { auth, board, user, gpt } = require("../src");

router.get("/", (req, res) => res.send("hi"));


router.use("/auth", auth);
router.use("/board", board);
router.use("/user", user);
router.use("/gpt", gpt);
router.use("/oauth", user)



module.exports = router;
