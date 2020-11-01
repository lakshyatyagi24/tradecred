const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: './upload/excel',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

app.post("/upload", upload.single('fd'), (req, res) => {
    console.log(req.file);
})

app.listen(4000, () => {
    console.log("server up and running")
})