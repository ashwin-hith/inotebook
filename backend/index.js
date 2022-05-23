const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')
const app = express()


connectToMongo();
app.use(cors())

const port = 5000

app.use(express.json());
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNoteBook app listening at http://localhost:${port}`)
})

