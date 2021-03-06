const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const AppRouter = require('./routes/AppRouter')



const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/api', AppRouter)
app.get('/', (req, res) => {res.send({msg: 'server running'})})



app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))