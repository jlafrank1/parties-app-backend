const express = require('express')
const app = express()
require('./db/db')
const PORT = process.env.PORT || 9000

const cors = require('cors')

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}

app.use(cors(corsOptions))

const partiesController = require('./controllers/parties.js')

app.use(express.json());
app.use('/parties', partiesController)

app.listen(PORT, () => {
  console.log('🎉🎊', `celebrations happening on port ${PORT}`, '🎉🎊',)
})
