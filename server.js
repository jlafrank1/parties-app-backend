const express = require('express')
const app = express()
require('./db/db')
const PORT = process.env.PORT || 9000

const partiesController = require('./controllers/parties.js')

app.use(express.json());
app.use('/parties', partiesController)

app.listen(PORT, () => {
  console.log('🎉🎊', `celebrations happening on port ${PORT}`, '🎉🎊',)
})
