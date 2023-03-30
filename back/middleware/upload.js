const multer = require('multer');
const path = require('path');

const uploadImage = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, "uploads/")
        },

        filename: (req, file, done) => {
            file.originalname = Buffer.from(file.originalname, "latin1").toString("utf-8")
            const ext = path.extname(file.originalname)
            const basename = path.basename(file.originalname, ext)
            done(null, basename + '_' + Date.now() + ext);
        }
    }),
    limits:{ fileSize: 10* 1024 * 1024 },
})

module.exports = uploadImage