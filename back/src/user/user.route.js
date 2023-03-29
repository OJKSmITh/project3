const express = require('express')
const router = express.Router()
const upload = require("../../middleware/upload");
// const controller = require() 컨트롤러

router.get('/',(req,res)=>{
    res.send('user')
})



router.post("/single", upload.single("filename"), (req, res) => {
    console.log(req.file)
    res.send(req.file);
});

module.exports = router