const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000

const partiesController = require('./controllers/parties.js')

app.use('/parties', partiesController)

app.listen(PORT, () => {
  console.log('🎉🎊', `celebrations happening on port ${PORT}`, '🎉🎊',)
})
