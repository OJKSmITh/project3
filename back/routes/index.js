const express = require("express");
const router = express.Router();
const fs = require('fs')
const mime = require('mime')
const { auth, board, user, gpt } = require("../src");
const upload = require("../middleware/upload");

router.get("/", (req, res) => res.send("hi"));


router.use("/auth", auth);
router.use("/board", board);
router.use("/user", user);
router.use("/gpt", gpt);
router.use("/oauth", user)
router.get('/download/:filename',(req,res,next)=>{
    const {filename} = req.params
    const filepath = `./uploads/${filename}`
    const mimeType = mime.getType(filepath) // mime 모듈을 사용하여 MIME 타입 추출\
    const filestream = fs.createReadStream(filepath)
    res.setHeader('Content-Type', mimeType) // Content-Type 헤더에 MIME 타입 지정
    res.download(filepath)

    // // 스트림을 사용하여 파일 전송
    // filestream.pipe(res)
})

router.post("/single", upload.single("filename"), (req, res) => {
    console.log('file:::',req.file)
    res.send(req.file);
});




module.exports = router;
