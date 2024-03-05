const express = require('express')
const path = require('path')
const multer = require('multer')

// storage location and filename
const myStorage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, "documents/")
    },
    filename: (req,file,cb) => {
       // cb(null, file.originalname) // original file name
       cb(null,`doc-${new Date().getTime().toString()}${path.extname(file.originalname)}`) // doc-123244354.pdf
    }
});


// multer config
const fileConfig = multer({
    storage: myStorage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10Mb
    }
}).single('mFile')

module.exports = fileConfig