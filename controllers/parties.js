const express = require('express')
const router = express.Router()
const Party = require('../models/party.js')

// --- index ---
router.get('/', async (req, res) => {
  try {
    const foundParties = await Party.find()
    res.status(200).json(foundParties)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

// --- show ---
router.get('/:id', async (req, res) => {
  try {
    const foundParties = await Party.findById(req.params.id)
    res.status(200).json(foundParties)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

// -- update --
router.put('/:id', async (req, res) => {
  try {
    const updatedParty = await Party.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedParty)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})


// -- create --
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


// -- delete --
router.delete('/:id', async (req, res) => {
  try {
    const deletedParty = await Party.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedParty)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})


module.exports = router
