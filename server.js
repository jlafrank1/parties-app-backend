const express = require('express')
const app = express()
const cors = require('cors')
require('./db/db')

const PORT = process.env.PORT || 9000

const partiesController = require('./controllers/parties.js')

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}

app.use(cors(corsOptions))



app.use(express.json());
app.use('/parties', partiesController)

app.listen(PORT, () => {
  console.log('🎉🎊', `celebrations happening on port ${PORT}`, '🎉🎊',)
})
