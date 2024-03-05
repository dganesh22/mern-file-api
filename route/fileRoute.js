const fileRoute = require('express').Router()

const { uploadFile, readAllFiles, readSingleFile, deleteFile } = require('../controller/fileCtrl')
const fileConfig = require('../middleware/fileConfig')

// path
fileRoute.post(`/upload`,fileConfig, uploadFile)

fileRoute.get(`/all`, readAllFiles)

fileRoute.get(`/single/:id`, readSingleFile)

fileRoute.delete(`/delete/:id`, deleteFile)

module.exports = fileRoute