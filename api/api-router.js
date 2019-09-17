const express = require('express')
const StrainsRouter = require('../routes/strains/strains-router')
const router = express.Router()
router.use('/strains', StrainsRouter)
module.exports = router;