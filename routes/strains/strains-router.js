const express = require('express')
const router = express.Router();
const db = require('./strains-model')

router.get('/', (req, res) => {
    db.find()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            res.status(500).json({ message: "BOO"})

        })
})

module.exports = router;