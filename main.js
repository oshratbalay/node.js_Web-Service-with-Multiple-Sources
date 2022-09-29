const express = require('express')
const cors = require('cors')
 require('./config/dataBase')

const app = express()
app.use(cors())
app.use(express.json())


const persons = require('./Routers/personRouter')
app.use('/person', persons )

app.listen('8000',()=>console.log('you listen to port 8000'))