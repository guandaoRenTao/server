require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const path = require('path');
const cors = require('cors')
const router = require('./routes/index')


const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({}))
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.get('/', function(req,res){
  res.sendFile((__dirname + '/index.html'))
})
app.use(express.static(path.resolve(__dirname, 'static')))


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)

  }
}

start()