const express = require('express')
const router = express.Router()
const Party = require('../models/party.js')

router.get('/', async (req, res) => {
  try {
    const foundParties = await Party.find()
    res.status(200).json(foundParties)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})



router.post('/', async (req, res) => {
    try {
        const newParty = await Party.create(req.body);
        res.status(200).json(newParty)
    } catch(err) {
        res.status(400).json({
            error: err.message
        })
    }
})


module.exports = router
